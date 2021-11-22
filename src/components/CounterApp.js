import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState(value);

    const add = () => setCounter (counter + 1);
    const reset = () => setCounter(value);
    const substract = () => setCounter(counter -1);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={ add }>+1</button>
            <button onClick={ reset }>Reset</button>
            <button onClick={ substract }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;