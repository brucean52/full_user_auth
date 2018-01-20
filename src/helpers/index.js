import React from 'react';

export function renderInput({input, type, placeholder, meta: {error, touched}}){
    return(
        <div className="input-field">
            <input {...input} type={type} placeholder={placeholder} />
            <p className="red-text">{touched && error}</p>
        </div>
    );
}
