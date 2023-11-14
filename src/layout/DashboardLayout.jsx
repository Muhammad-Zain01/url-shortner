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
    LinkButton
} from './Layout.style';
import { useLocation } from 'react-router-dom';
import { HeaderItems, SideItems } from './NavItems';

const DashboardLayout = ({ children }) => {
    const { token: { colorBgContainer } } = theme.useToken();
    const [collapsed, setCollapsed] = useState(true);
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
                <Menu
                    theme='light'
                    mode="horizontal"
                    items={HeaderItems}
                />
            </NavHeader>
            <Layout>
                <SideMenuContainer
                    breakpoint='lg'
                    collapsed={collapsed}
                    bg={colorBgContainer}
                    width={250}
                    onBreakpoint={(broken) => setCollapsed(broken)}
                >
                    <LinkButtonContainer>
                        <LinkButton style={{ width: '100%' }} icon={<PlusOutlined />} type='primary'>{!collapsed && `Create`}</LinkButton>
                    </LinkButtonContainer>
                    <SideMenu
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
