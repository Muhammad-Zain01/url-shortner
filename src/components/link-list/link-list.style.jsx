import styled from "styled-components";
import { Button, List } from "antd";
const { Item } = List

export const MainUrl = styled.a`
    font-size: 14px !important;
    font-weight: 500;
    color: #2a5bd7 !important;
`
export const OldUrl = styled.a`
    font-size: 14px !important;
    font-weight: 300;
    color: grey !important;
`
export const TitleContainer = styled.div`
    a{
        color: black;
        font-size: 18px;
    }
    a:hover{
        text-decoration: underline;
    }
`

export const ActionButton = styled(Button)`
    border-radius: 0.2rem;
    margin: 0px 5px;
    padding: 2px 8px;
    ${
        props => props.type != 'primary' && 'color: #595959;'
    }
`