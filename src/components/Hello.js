import React from 'react';
import PropTypes from 'prop-types';

const hello = ({welcome}) => {
    return (
        <>
            <h1>{welcome}</h1>
            <p>My first App</p>
        </>
    );
}

hello.PropTypes ={
    welcome: PropTypes.string,
}

export default hello;