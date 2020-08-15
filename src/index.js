import React from 'react';
import ReactDOM from 'react-dom';
import 'sass/home.scss';
import App from 'app/App';
import { Provider } from 'react-redux'; // provider
import { BrowserRouter } from 'react-router-dom';

import store from 'core/store';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
