import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {Router, Route, hashHistory} from 'react-router';
import ForgetPassword from './components/ForgetPassword';
import Login from './components/Login';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/login" component={Login}/>
            <Route path="/forget" component={ForgetPassword}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
