import styled from "styled-components";
import { Avatar } from "antd";

export const UserAvatar = styled(Avatar)`
    background: #6e6e6e;
   
`
export const UserActionButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
    height: 52px;
    border-radius: 4px;
    &:hover{
        background-color: #e9e9e9;
    }
`

export const UserActionContainer = styled.div`
    display: flex;
    padding: 10px;
`

export const UserActionDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const SpanName = styled.span`
    padding: 0px 10px;
`

export const SpanEmail = styled.span`
    font-size: 12px; 
    color: #979797;
    padding: 0px 10px;
`
