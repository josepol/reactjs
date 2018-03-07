import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

ReactDOM.render(
    <Provider store={Store}>
        <BrowserRouter basename='/app'>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
