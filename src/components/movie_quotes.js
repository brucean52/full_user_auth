import React from 'react';

import { connect } from 'react-redux';
import { getQuote } from '../actions'; 

const MovieQuotes = props => {
    props.getQuote();
    return (
        <div>
            <h1 className="center-align">Movie Quotes</h1>
            <p>Youtube Money</p>
        </div>
    );
}

export default connect(null, {getQuote})(MovieQuotes);