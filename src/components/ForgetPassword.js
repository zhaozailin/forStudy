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
                <div className="password-input">
                    <input />
                </div>
                <Button className="btn password-btn" type="primary">下一步</Button>
             </div>);

    }
}
export default ForgetPassword;