import styled from 'styled-components'
import { Button, Layout, Menu } from 'antd'
const { Header, Content, Sider } = Layout;


export const NavHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: end;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    background-color: ${props => props.bg};
`
export const SideMenu = styled(Menu)`
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .ant-menu-item{
        border-radius: 4px;
        font-weight: 400;
        width: 90%;
        margin: 8px 0px;
    }
    .ant-menu-item-selected::before{
        content: "";
        width: 5px;
        font-weight: 500;
        left: 0px;
        border-radius: 20px;
        position: absolute;
        height: 20px;
        background-color: #0800ff;
    }

`
export const SideMenuContainer = styled(Sider)`
    background-color: ${props => props.bg} !important;
`
export const LayoutContent = styled(Content)`
    padding: 24px;
    margin: 0px;
    min-height: 280px;
    background-color: ${props => props.bg};
`
export const LayoutContentContainer = styled(Content)`
    padding: 24px;
    overflow-y: scroll;
`
export const LinkButton = styled(Button)`
    width: 100%;
    height: 40px;
    border-radius: 0.3rem;
    font-size: 15px;
`
export const LinkButtonContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 10px 10px;
`