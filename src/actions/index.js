import types from './types';
import axios from 'axios';

const BASE_URL = "http://api.reactprototypes.com";

export function signUp(cred){
    return dispatch =>{
        axios.post(`${BASE_URL}/signup`, cred)
        .then(resp=>{
            console.log('resp from sign up:', resp);
            localStorage.setItem('token', resp.data.token);

            dispatch({ type: types.SIGN_UP});
        })
        .catch(err=> {
            //console.log("SignUp Erro: ", err.response.data.error);
            dispatch({
                type: types.ERROR,
                payload: err.response.data.error
            })
        })
    }
}

export function signIn(cred){
    return dispatch =>{
        axios.post(`${BASE_URL}/signin`, cred)
        .then(resp=>{
            console.log('resp from sign in:', resp);
            localStorage.setItem('token', resp.data.token);

            dispatch({ type: types.SIGN_IN});
        })
        .catch(err=>{
            dispatch({
                type: types.ERROR,
                payload: 'Invalid Login Information'
            })
        });
    }
}

export function getQuote(){
    return dispatch =>{

        const config = {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }

        axios.get(BASE_URL, config)
        .then(resp=>{
            console.log("getQuote response:", resp);
            dispatch({
                type: types.GET_QUOTE,
                payload: resp.data.message
            })
        })
    }
}

export function logout(){
    localStorage.removeItem('token');
    
    return {
        type: types.LOG_OUT
    }
    
}