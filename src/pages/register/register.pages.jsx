import { useState, useEffect } from "react";
import { Form, message } from "antd";
import {
  LoginBox,
  LoginContainer,
  FormTitle,
  FooterText,
} from "../login/login.styles";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Input } from "../../components/input/input.component";
import { Button } from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { Link } from "react-router-dom";
import { VerifyUsername, RegisterUser } from "../../API/API.request";
import Logo from "../../components/logo/logo.component";
import { setPageTitle } from "../../utils/setPageTitle";

const RegisterPage = () => {
  const redirect = useNavigate();
  const [loading, setLoading] = useState(false);
  const [UsernameConfig, setUsernameConfig] = useState({
    validateStatus: "",
    hasFeedback: false,
    help: "",
  });
  const [EmailConfig, setEmailConfig] = useState({
    validateStatus: "",
    hasFeedback: false,
    help: "",
  });

  useEffect(() => {
    setPageTitle("Create Account");
  }, []);

  const onSubmit = async (value) => {
    const { username, email, password } = value;
    setLoading(true);
    const response = await VerifyUsername(username);
    setLoading(false);
    if (!response.status) {
      setUsernameConfig({
        validateStatus: "error",
        hasFeedback: true,
        help: "Username already exists",
      });
      return;
    }
    setUsernameConfig({
      validateStatus: "success",
      hasFeedback: true,
      help: "",
    });
    if (!validator.isEmail(email) == true) {
      setEmailConfig({
        validateStatus: "error",
        hasFeedback: true,
        help: "Email is not valid",
      });
      return;
    }
    setEmailConfig({ validateStatus: "success", hasFeedback: true, help: "" });
    const regResponse = await RegisterUser({ username, email, password });
    if (regResponse.status) {
      message.success("You have Successfully Registered.");
      redirect("/login");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <div style={{ marginBottom: 32 }}>
          <Logo />
        </div>

        <FormTitle>Create Account</FormTitle>

        <Form
          name="register_form"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="username"
            validateStatus={UsernameConfig.validateStatus}
            hasFeedback={UsernameConfig.hasFeedback}
            help={UsernameConfig.help}
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="email"
            validateStatus={EmailConfig.validateStatus}
            hasFeedback={EmailConfig.hasFeedback}
            help={EmailConfig.help}
            rules={[{ required: true, message: "Please input your email" }]}
          >
            <Input
              type="email"
              prefix={<MailOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Email"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input
              prefix={<LockOutlined style={{ color: "#bfbfbf" }} />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              size="large"
              style={{ width: "100%", height: "40px" }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <FooterText>
          Already have an account? <Link to="/login">Sign in</Link>
        </FooterText>
      </LoginBox>
    </LoginContainer>
  );
};

export default RegisterPage;
