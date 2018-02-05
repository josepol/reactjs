import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.scss';

ReactDOM.render(
    <BrowserRouter basename='/app'>
        <App />
    </BrowserRouter>, 
document.getElementById('root'));
