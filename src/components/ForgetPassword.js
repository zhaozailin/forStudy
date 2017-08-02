/**
 * Created by zhangbin on 2017-07-27.
 */

import React from 'react';
import { Button,Toast} from 'antd-mobile';
import '../styles/password.css';
class ForgetPassword extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            verify: '',
            step: 0  //0 第一步 1 第二步 2 第三步
        }
    }

    changeUsername(e) {
        this.setState({
            username: e.target.value.trim()
        });
    }

    changeVerify(e){
        this.setState({
            verify: e.target.value.trim()
        });
    }

    checkPwdStepOne() {
        if (this.state.username === '') {
            Toast.info('请输入账号！', 2);
            return false;
        }
        if (this.state.verify === '') {
            Toast.info('请输入验证码！', 2);
            return false;
        }
        return true;
    }


    render() {
        return (
            <div>
                <div className="password-title">为学网-找回密码</div>
                <div className="password-top">
                    <div className="password-step step1 password-step-active" style={{width:"30%"}}>
                        <span style={{'marginLeft': '-10px'}}>填写账号</span>
                        <div className="arrow-right"></div>
                    </div>
                    <div className="password-step step2" style={{width:"35%"}}>
                        <span style={{'paddingLeft': '10px'}}>验证身份</span>
                        <div className="arrow-left"></div>
                        <div className="arrow-right-gray"></div>
                    </div>
                    <div className="password-step step3" style={{width:"35%"}}>
                        <span style={{'paddingLeft': '18px'}}>设置新密码</span>
                        <div className="arrow-left"></div>
                    </div>
                </div>

                <div>
                    <div className="password-input" style={{marginBottom: "0px"}}>
                        <input type="text" placeholder="请输入账号或者绑定的手机号" value={this.state.username}
                               onInput={this.changeUsername.bind(this)} maxLength="30"/>
                    </div>
                    <div>
                        <div className="password-input password-verify" style={{display:'inline-block'}}>
                            <input type="text" placeholder="请输入验证码" onInput={this.changeVerify.bind(this)} value={this.state.verify} maxLength="4"/>
                        </div>
                        <div className="password-verify-right"></div>

                    <Button className="btn password-btn" onClick={this.checkPwdStepOne.bind(this)} activeClassName="login-btn-active" type="primary">下一步</Button>
                    </div>

                    <div className={this.state.step == 1 ? 'password-show': 'password-hidden'}>
                        <div className="password-input password-verify" style={{display:'inline-block'}}>
                            <input type="text" placeholder="请输入验证码" onInput={this.changeVerify.bind(this)} value={this.state.verify} maxLength="4"/>

                        </div>
                        <Button className="btn password-btn password-step2-verify"  activeClassName="login-btn-active" type="primary">免费获取验证码</Button>
                    </div>

                </div>
             </div>);

    }
}
export default ForgetPassword;