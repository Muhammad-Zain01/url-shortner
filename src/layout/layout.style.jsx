import styled from 'styled-components'
import { Button, Layout, Menu } from 'antd'
const { Header, Content, Sider } = Layout;
import { LeftOutlined } from '@ant-design/icons';

export const NavHeader = styled(Header)`
    display: flex;
    position: absolute;
    width: 100%;
    top: 0;
    align-items: center;
    justify-content: end;
    border-bottom: .1rem solid #dbe0eb;
    background-color: ${props => props.bg};
    /* z-index: 10; */
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
        top: 25%;
        position: absolute;
        height: 20px;
        background-color: #0800ff;
    }

`
export const SideMenuContainer = styled(Sider)`
    background-color: ${props => props.bg} !important;
    border-right: .1rem solid #dbe0eb;
`
export const LayoutContent = styled(Content)`
    padding: 24px;
    margin-top: 65px;
    min-height: 280px;
    background-color: ${props => props.bg};
    background:white;
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
    margin-top: 80px;
    width: 100%;
    padding: 10px 10px;
`
export const Arrow = styled(LeftOutlined)`
    padding: 10px;
    border: .1rem solid #dbe0eb;
    color: #595959;
    position: absolute;
    top: 45px;
    right: -15px;
    background-color: white;
    border-radius: 200px; 
    font-size: 10px; 
    cursor: pointer;
    transform:rotate(${props => props.side == 'right' && "180deg"});
    transition: 0.2s ease all;
    
`