import { useEffect, useState } from "react";
import { Form, message } from "antd";
import {
  LoginBox,
  LoginContainer,
  FormTitle,
  FooterText,
} from "./login.styles";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Login } from "../../API/API.request";
import { Input } from "../../components/input/input.component";
import { Button } from "../../components/button/button.component";
import usePrivateNavigate from "../../hook/usePrivateNavigate";
import useSession from "../../hook/useSession";
import { Link } from "react-router-dom";
import { reload } from "../../utils/helper";
import Logo from "../../components/logo/logo.component";
import useCookie from "../../hook/useCookies";
import { setPageTitle } from "../../utils/setPageTitle";

const LoginPage = () => {
  const { adminNavigate } = usePrivateNavigate();
  const [loading, setLoading] = useState(false);
  const Session = useSession();
  const cookie = useCookie();

  useEffect(() => {
    setPageTitle("Sign In");
    adminNavigate();
    // eslint-disable-next-line
  }, []);

  const onSubmit = async (value) => {
    const { username, password } = value;
    setLoading(true);
    const response = await Login(username, password);
    if (response.status) {
      const token = response?.token;

      if (token) {
        // Ensure token is stored as a string
        const tokenString =
          typeof token === "object" ? JSON.stringify(token) : token;
        cookie.set("token", tokenString);
        try {
          // Make sure we're using a valid JWT token format
          if (
            typeof tokenString === "string" &&
            tokenString.split(".").length === 3
          ) {
            Session.set("user", atob(tokenString.split(".")[1]));
            message.success("You have Login Successfully.");
            reload();
          } else {
            message.error("Invalid token format received from server");
            setLoading(false);
          }
        } catch (error) {
          console.error("Error processing token:", error);
          message.error("Error processing authentication token");
          setLoading(false);
        }
      }
    } else {
      message.error("Email or Password is not valid.");
    }
    setLoading(false);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <Logo />
        </div>

        <FormTitle>Sign In</FormTitle>

        <Form
          name="login_form"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "#bfbfbf" }} />}
              placeholder="Username"
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

          <Form.Item style={{ marginBottom: 12 }}>
            <div style={{ textAlign: "right" }}>
              <Link to="/forgot-password" style={{ fontSize: "14px" }}>
                Forgot password?
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              style={{ width: "100%", height: "40px" }}
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>

        <FooterText>
          Don't have an account? <Link to="/register">Sign up</Link>
        </FooterText>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
