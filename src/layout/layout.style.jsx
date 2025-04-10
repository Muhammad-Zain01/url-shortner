import styled from 'styled-components'
import { Button, Layout, Menu } from 'antd'
const { Header, Content, Sider } = Layout;
import { LeftOutlined } from '@ant-design/icons';

export const NavHeader = styled(Header)`
    display: flex;
    padding: 0 20px;
    position: absolute;
    width: 100%;
    top: 0;
    align-items: center;
    justify-content: end;
    border-bottom: .1rem solid #dbe0eb;
    background-color: ${props => props.bg};
    z-index: 1;
`
export const SideMenu = styled(Menu)`
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 10px;
    
    .ant-menu-item {
        border-radius: 8px;
        font-weight: 500;
        width: 90%;
        margin: 8px 0px;
        transition: all 0.3s ease;
        height: 48px;
        line-height: 48px;
        
        &:hover {
            background-color: rgba(7, 102, 173, 0.05);
            color: ${props => props.ico};
        }
    }
    
    .ant-menu-item-selected {
        background-color: rgba(7, 102, 173, 0.1);
        color: ${props => props.ico};
        font-weight: 600;
        
        &::before {
            content: "";
            width: 4px;
            left: 0px;
            border-radius: 0 4px 4px 0;
            top: 12px;
            position: absolute;
            height: 24px;
            background-color: ${props => props.ico};
        }
    }
    
    .ant-menu-item .anticon {
        font-size: 18px;
        vertical-align: middle;
    }
`

export const SideMenuContainer = styled(Sider)`
    background-color: ${props => props.bg} !important;
    border-right: .1rem solid #dbe0eb;
    z-index: 2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    padding-top: 10px;
    
    .ant-layout-sider-children {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`

export const LayoutContent = styled(Content)`
    padding: 24px;
    margin-top: 65px;
    min-height: 280px;
    background-color: ${props => props.bg};
    @media only screen and (max-width: 660px) {
        padding: 0px !important;
    }
`
export const LayoutContentContainer = styled(Content)`
    padding: 24px;
    overflow-y: scroll;
    background-color: ${props => props.bg};
`
export const LinkButton = styled(Button)`
    width: 100%;
    height: 44px;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 0 2px 6px rgba(7, 102, 173, 0.2);
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(7, 102, 173, 0.3);
    }
`
export const LinkButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;
    padding: 10px 16px;
`

export const Arrow = styled(LeftOutlined)`
    padding: 10px;
    border: .1rem solid #dbe0eb;
    color: #595959;
    position: absolute;
    top: 45px;
    right: -15px;
    background-color: white;
    border-radius: 50%;
    font-size: 10px; 
    cursor: pointer;
    transform: rotate(${props => props.side == 'right' && "180deg"});
    transition: 0.2s ease all;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    
    &:hover {
        color: #0766AD;
        border-color: #0766AD;
    }
`

export const SidebarFooter = styled.div`
    margin-top: auto;
    padding: 16px;
    border-top: 1px solid #dbe0eb;
    display: ${props => props.collapsed ? 'none' : 'block'};
    font-size: 12px;
    color: #8c8c8c;
    text-align: center;
`
