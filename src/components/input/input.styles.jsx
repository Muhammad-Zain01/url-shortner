import styled, { css } from "styled-components";
import { Input } from "antd";

const GlobalButtonStyle = css`
    padding: 10px ;
`

export const TextInput = styled(Input)`
    ${GlobalButtonStyle}
`
export const PasswordInput = styled(Input.Password)`
    ${GlobalButtonStyle}
`
