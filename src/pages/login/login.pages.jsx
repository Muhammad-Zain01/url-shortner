import React, { useEffect } from 'react';
import { Form, Divider, message } from 'antd';
import { LoginBox, LoginContainer } from './login.styles';
import { UserOutlined, LockOutlined, GoogleOutlined } from '@ant-design/icons';
import { Post } from '../../utils/API';
import { Input } from '../../components/input/input.component';
import { Button } from "../../components/button/button.component"
import { useNavigate } from 'react-router-dom';
import useSession from '../../hook/useSession';
const LoginPage = () => {
    const navigate = useNavigate();
    const Session = useSession();
    useEffect(() => {
        let session = Session.get('user')
        if (session) {
            session = JSON.parse(session)
            return navigate(`/${session.username}`);
        }
    }, [])

    const onSubmit = async (value) => {
        const { username, password } = value
        const response = await Post('/events/login', { username, password })
        if (response.status) {
            message.success('You have Login Successfully.');
            Session.set('user', JSON.stringify(response.data));
            navigate(`/${response.data.username}`);
        } else {
            message.error('Email or Password is not valid.');
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
                        <Button size='medium' style={{ width: '100%' }} type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                <Divider />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', width: '100%' }}>
                    <Button type='primary' icon={<GoogleOutlined />}>Google</Button>
                </div>
            </LoginBox>
        </LoginContainer>
    )
}
export default LoginPage;