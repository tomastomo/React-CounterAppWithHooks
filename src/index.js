import React from 'react';
import ReactDOM from 'react-dom';
//import CounterApp from './components/CounterApp';
import Hello from './components/Hello';
import './styles/styles.css';

const div = document.querySelector("#app");

ReactDOM.render(<Hello welcome="Hi from React" />,div);