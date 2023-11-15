import React, { useState } from 'react';
import { Form, message, Divider } from 'antd';
import { InputStyle, PasswordStyle, LoginButton, LoginBox, LoginContainer } from '../login/login.styles';
import { UserOutlined, LockOutlined, GoogleOutlined, MailOutlined } from '@ant-design/icons';
import { Post } from "../../utils/API"
import { useNavigate } from "react-router-dom";
import validator from 'validator'

const RegisterPage = () => {
    const redirect = useNavigate();
    const [UsernameConfig, setUsernameConfig] = useState({
        validateStatus: '',
        hasFeedback: false,
        help: ''
    })
    const [EmailConfig, setEmailConfig] = useState({
        validateStatus: '',
        hasFeedback: false,
        help: ''
    })
    const onSubmit = async (value) => {
        const { username, email, password } = value
        const response = await Post(`/events/verify/${username}`)
        if (response.status) {
            setUsernameConfig({ validateStatus: 'error', hasFeedback: true, help: 'Username already exists' })
            return;
        }
        setUsernameConfig({ validateStatus: 'success', hasFeedback: true, help: '' })
        if (!validator.isEmail(email) == true) {
            setEmailConfig({ validateStatus: 'error', hasFeedback: true, help: 'Email is not valid' })
            return;
        }
        setEmailConfig({ validateStatus: 'success', hasFeedback: true, help: '' })
        const regResponse = await Post('/events/register', { username, email, password })
        if(regResponse.status){
            message.success('You have Successfully Registed.');
            redirect("/login");
        }
        
    }
    return (
        <LoginContainer>
            <LoginBox >

                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onSubmit}
                >
                    <Form.Item
                        name="username"
                        validateStatus={UsernameConfig.validateStatus}
                        hasFeedback={UsernameConfig.hasFeedback}
                        help={UsernameConfig.help}
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <InputStyle prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        validateStatus={EmailConfig.validateStatus}
                        hasFeedback={EmailConfig.hasFeedback}
                        help={EmailConfig.help}
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <InputStyle prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <PasswordStyle
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item style={{ display: 'flex', justifyContent: 'end' }}>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <LoginButton size='medium' style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                            Register
                        </LoginButton>
                    </Form.Item>
                </Form>
                <Divider />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                    <LoginButton type='primary' icon={<GoogleOutlined />}>Register   with Google</LoginButton>
                </div>
            </LoginBox>
        </LoginContainer>
    )
}
export default RegisterPage;