import styled from "styled-components";
import { Input, Button } from "antd";

export const LoginContainer = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const LoginBox = styled.div`
    width: 35%;
    height: 50%;
`
export const InputStyle = styled(Input, Input.Password)`
    padding: 10px ;
`
export const PasswordStyle = styled(Input.Password)`
    padding: 10px ;
`
export const LoginButton = styled(Button)`
    font-size: 15px;
    height: 50px;

`