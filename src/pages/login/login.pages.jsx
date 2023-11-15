import React, { useEffect } from 'react';
import { Form, Divider, message } from 'antd';
import { InputStyle, PasswordStyle, LoginButton, LoginBox, LoginContainer, GoogleLogin } from './login.styles';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import { Post } from '../../utils/API';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        let session = sessionStorage.getItem('user')
        if (session) {
            session = JSON.parse(session)
            return navigate(`/${session.username}`);
        }
    }, [])

    const onSubmit = async (value) => {
        const { username, password } = value
        const response = await Post('/events/login', { username, password })
        console.log(response);
        if (response.status) {
            message.success('You have Login Successfully.');
            sessionStorage.setItem('user', JSON.stringify(response.data));
            navigate(`/${response.data.username}`);
        } else {
            message.error('User not found.');
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
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <InputStyle prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
                            Log in
                        </LoginButton>
                    </Form.Item>
                </Form>
                <Divider />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                    <LoginButton type='primary' icon={<GoogleOutlined />}>Google</LoginButton>
                </div>
            </LoginBox>
        </LoginContainer>
    )
}
export default LoginPage;