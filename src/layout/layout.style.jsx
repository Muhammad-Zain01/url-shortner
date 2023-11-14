import styled from 'styled-components'
import { Layout, Menu } from 'antd'
const { Header, Content, Sider } = Layout;


export const NavHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: end;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`
export const SideMenu = styled(Menu)`
    height: 100%;
    border-radius: 0;
`