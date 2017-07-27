/**
 * Created by zhaozailin on 2017/7/27.
 */
import React from 'react';
import '../styles/login.css';
import {Button} from 'antd-mobile';
import '../../node_modules/antd-mobile/dist/antd-mobile.css';

class Login extends React.Component {
    render() {
        return (
            <div>
                <div className="login-title">智学，让学习更简单</div>
                <div className="login-input login-user">
                    <div><i className="iconfont">&#xe64a;</i></div>
                    <input type="text" placeholder="用户名"/>
                </div>
                <div className="login-input login-password">
                    <div><i className="iconfont">&#xe66b;</i></div>
                    <input type="password" placeholder="请输入密码"/>
                </div>
                <Button className="btn login-btn" activeClassName="login-btn-active">登录</Button>
            </div>
        );
    }
}
export default Login;