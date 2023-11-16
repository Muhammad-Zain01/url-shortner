import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import {
    NavHeader,
    SideMenu,
    LayoutContent,
    LayoutContentContainer,
    SideMenuContainer,
    LinkButtonContainer,
    LinkButton,
    Arrow
} from './Layout.style';
import { useLocation } from 'react-router-dom';
import { SideItems } from './NavItems';
import UserAction from '../components/user-action/user-action.components';
const DashboardLayout = ({ children }) => {
    const { token: { colorBgContainer, colorPrimary } } = theme.useToken();
    const [collapsed, setCollapsed] = useState(false);
    const route = useLocation();
    const currentPage = {
        "dashboard": "1",
        "link": "2",
        "analytics": "3",
        "settings": "4",
    }[route.pathname.split('/')[route.pathname.split('/').length - 1]]

    return (
        <Layout>
            <NavHeader bg={colorBgContainer} >
                <UserAction />
            </NavHeader>
            <Layout>
                <SideMenuContainer
                    breakpoint='lg'
                    collapsed={collapsed}
                    bg={colorBgContainer}
                    width={250}
                    onBreakpoint={(broken) => setCollapsed(broken)}
                >
                    <Arrow side={!collapsed ? 'left' : 'right'} onClick={() => setCollapsed(!collapsed)} />
                    <LinkButtonContainer>
                        <LinkButton style={{ width: '100%' }} type='primary'>{!collapsed ? `Create new` : <PlusOutlined />}</LinkButton>
                    </LinkButtonContainer>
                    <SideMenu
                        ico={colorPrimary}
                        mode="inline"
                        defaultSelectedKeys={currentPage}
                        items={SideItems}
                    />
                </SideMenuContainer>
                <LayoutContentContainer>
                    <LayoutContent>
                        {children}
                    </LayoutContent>
                </LayoutContentContainer>
            </Layout>
        </Layout>
    );
};
export default DashboardLayout;
