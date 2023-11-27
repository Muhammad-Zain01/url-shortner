import { Button } from "antd";
import styled from "styled-components";

export const ButtonStyle = styled(Button)`
    font-size: 15px;
    width: ${(props) => props.width ? props.width : `100%`};
    ${(props) => props.vgap && `margin: 20px 0px`};
    height: ${(props) => props.height ? props.height + "px" : `50px`};
`