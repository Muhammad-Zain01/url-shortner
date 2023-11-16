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