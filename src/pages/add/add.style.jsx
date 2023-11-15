import styled from "styled-components";
import { Input, Button, Typography } from "antd";
const { Text } = Typography;

export const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const AddDiv = styled.div`
    width: 35%;
`

export const InputStyle = styled(Input)`
    padding: 10px ;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const Inputlabel = styled(Text)`
    font-size: 15px;
    font-weight: 600;
`

export const SpanStyle = styled.span`
    font-weight: 300;
`