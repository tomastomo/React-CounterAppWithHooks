import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/CounterApp';
import './styles/styles.css';

const div = document.querySelector("#app");

ReactDOM.render(<CounterApp value={10} />,div);