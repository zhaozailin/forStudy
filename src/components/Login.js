/**
 * Created by zhaozailin on 2017/7/27.
 */
import React from 'react';
import '../styles/login.css';
import {Button, Toast, WhiteSpace, WingBlank, Icon} from 'antd-mobile';
import '../../node_modules/antd-mobile/dist/antd-mobile.css';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            checkedFlag: false,
            username: '',
            password: ''
        }
    }

    rememberPassword() {
        this.setState({
            checkedFlag: !this.state.checkedFlag
        });
    }

    checkLogin() {
        if (this.state.username === '') {
            Toast.info('请输入用户名！', 2);
            return false;
        }
        if (this.state.password === '') {
            Toast.info('请输入密码！', 2);
            return false;
        }
        return true;
    }

    toLogin() {
        if (this.checkLogin()) {
            Toast.loading('登录中', 3, () => {
                Toast.success('登录成功', 1);
            });
        }
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value.trim()
        });
    }

    changePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    toForgetPassword(){

    }

    render() {
        return (
            <div>
                <div className="login-title">为学，让学习更简单</div>
                <div className="login-input login-user">
                    <div><i className="iconfont">&#xe64a;</i></div>
                    <input type="text" placeholder="用户名" value={this.state.username} onInput={this.changeUsername.bind(this)} maxLength="30"/>
                </div>
                <div className="login-input login-password">
                    <div><i className="iconfont">&#xe66b;</i></div>
                    <input type="password" placeholder="请输入密码" value={this.state.password} onInput={this.changePassword.bind(this)} maxLength="30"/>
                </div>
                <p className="login-patriarch">
                    <a>家长注册</a>
                </p>
                <Button className="btn login-btn" activeClassName="login-btn-active" onClick={this.toLogin.bind(this)}>登录</Button>
                <div className="login-password-block">
                    <div className="login-checkbox">
                        {this.state.checkedFlag && <i className="iconfont login-checked" onClick={this.rememberPassword.bind(this)}>&#xe6c9;</i>}
                        <i className="iconfont" onClick={this.rememberPassword.bind(this)}>&#xe600;</i>
                        <label onClick={this.rememberPassword.bind(this)}>记住密码</label>
                    </div>
                    <a className="login-forget" onClick={this.toForgetPassword.bind(this)}>忘记密码？</a>
                </div>
            </div>
        );
    }
}
export default Login;