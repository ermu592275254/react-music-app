import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.less';
// import App from './App';
import Routes from './config/router.config'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {store} from './redux/index'

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
