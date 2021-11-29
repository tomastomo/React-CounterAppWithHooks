import React from 'react';
import PropTypes from 'prop-types';

const Hello = ({welcome, subtitle}) => {
    return (
        <>
            <h1>{welcome}</h1>
            <p>{subtitle}</p>
        </>
    );
}

Hello.propTypes ={
    welcome: PropTypes.string,
}

Hello.defaultProps ={
    subtitle: 'My first React page',
}

export default Hello;