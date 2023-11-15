import React from 'react';
import { Form, Button } from 'antd';
import { InputStyle, PasswordStyle, LoginButton, LoginBox, LoginContainer } from './login.styles';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const LoginPage = () => {
    const [form] = Form.useForm();

    const onSubmit = () => {

    }
    return (
        <LoginContainer>
            <LoginBox >
                <div>
                    <Button type='primary'> Google</Button>
                </div>
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
            </LoginBox>
        </LoginContainer>
    )
}
export default LoginPage;