import React, { useEffect } from 'react';
import { Form, Divider, message } from 'antd';
import { LoginBox, LoginContainer } from './login.styles';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Login } from '../../API/API.request';
import { Input } from '../../components/input/input.component';
import { Button } from "../../components/button/button.component"
import usePrivateNavigate from '../../hook/usePrivateNavigate';
import useSession from '../../hook/useSession';
import { Link } from 'react-router-dom';
import GoogleButton from '../../components/google-button/google-button.components';
import { reload } from '../../utils/helper';
const LoginPage = () => {
    const { adminNavigate } = usePrivateNavigate();
    const Session = useSession();
    useEffect(() => {
        adminNavigate()
    }, [])

    const onSubmit = async (value) => {
        const { username, password } = value
        const response = await Login(username, password)
        if (response.status) {
            message.success('You have Login Successfully.');
            Session.set('user', JSON.stringify(response.data));
            reload();
        } else {
            message.error('Email or Password is not valid.');
        }
    }
    return (
        <>
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
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
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
                            <Button size='medium' style={{ width: '100%' }} type="primary" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                    <Divider />
                    <GoogleButton>Login With Google</GoogleButton>
                </LoginBox>
                <div>
                    Don't have an account? <Link to="/register">Sign up</Link>
                </div>
            </LoginContainer>
        </>
    )
}
export default LoginPage;