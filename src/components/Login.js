/**
 * Created by zhaozailin on 2017/7/27.
 */
import React from 'react';
import '../styles/login.css';
// import {  } from 'antd-mobile';

class Login extends React.Component {
    render() {
        return (<div>
            <div className="login-title">智学，让学习更简单</div>
            <div className="login-input login-user">
                <i className="iconfont">&#xe64a;</i>
                <input type="text" placeholder="用户名"/>
            </div>
            <div className="login-input login-password">
                <i className="iconfont">&#xe66b;</i>
                <input type="password" placeholder="请输入密码"/>
            </div>
        </div>);
    }
}
export default Login;