import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent){
    class Auth extends Component {
        //check if user is signed in
        componentWillMount(){
            if(!this.props.auth){
                this.props.history.push("/");
            }
        }

        componentWillReceiveProps(nextProps){
            if(!nextProps.auth){
                this.props.history.push("/");
            }
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps, null)(Auth);
}