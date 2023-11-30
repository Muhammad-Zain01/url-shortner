import React, { useState } from 'react';
import { Steps, Result } from 'antd';
import Email from '../../components/email/email.components';
import UsernameVerification from '../../components/username-verification/username-verification.component';
import { useNavigate } from "react-router-dom"
import { ForgotPasswordContainer, ForgotPasswordContent, ForgotPasswordBox, ForgotButton } from './forgot-password.styles';
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);
    const [token, setToken] = useState("");
    const items = ['Email', 'Verification'].map((item, idx) => ({
        key: item,
        title: item,
    }));
    return (
        <ForgotPasswordContainer>
            <ForgotPasswordBox>
                <Steps current={current} items={items} />
                <ForgotPasswordContent>
                    {
                        current == 0 && (<Email change={setCurrent} setToken={setToken} />)
                    }
                    {
                        current == 1 && (<UsernameVerification change={setCurrent} token={token} />)
                    }
                    {
                        current == 2 && (
                            <div>
                                <Result
                                    status="success"
                                    title="Successfully Reset the Password"
                                    subTitle="Please login with your new password, sent to your email."
                                    extra={
                                        <ForgotButton type="primary" onClick={() => navigate('/login')}>Go to Login</ForgotButton>
                                    }
                                />
                            </div>
                        )
                    }
                </ForgotPasswordContent>
            </ForgotPasswordBox>
        </ForgotPasswordContainer>
    );

}
export default ForgotPassword;