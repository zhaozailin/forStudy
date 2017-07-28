/**
 * Created by zhangbin on 2017-07-27.
 */

import React from 'react';
import { Button} from 'antd-mobile';
import '../styles/password.css';
class ForgetPassword extends React.Component {

    render() {
        return (
            <div>


                <div className="password-title">为学网-找回密码</div>
                <div className="password-top">
                    <div className="password-step step1 password-step-active">填写账号</div>
                    <div className="password-step step2">验证身份</div>
                    <div className="password-step step3">设置新密码</div>
                </div>

                <div>
                    <div className="password-input">
                        <input type="text" placeholder="请输入账号或者绑定的手机号"/>
                    </div>
                    <div className="password-input password-verify">
                        <input type="text" placeholder="请输入验证码"/>
                    </div>
                    <Button className="btn password-btn" type="primary">下一步</Button>
                </div>
             </div>);

    }
}
export default ForgetPassword;