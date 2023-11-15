import styled from "styled-components";
import { Input, Button, Typography, Divider } from "antd";
const { Text } = Typography;

export const AddContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: white; */
    border: 4px;

`

export const AddDiv = styled.div`
    width: 100%;
    padding: 40px;
    border-radius: 4px;
    background-color: white;
`

export const InputStyle = styled(Input)`
    padding: 10px ;
    width: 100%;
`

export const Inputlabel = styled(Text)`
    font-size: 15px;
    font-weight: 600;
`

export const SpanStyle = styled.span`
    font-weight: 300;
`

export const DividerStyle = styled(Divider)`
    border: 1.7px solid #e8ebf2;
    margin: 40px 0;
`