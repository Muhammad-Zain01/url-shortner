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
    const [ThemeMode, setThemeMode] = useState(true);
    const ThemeSettings = ThemeMode ? "light" : "dark";
    const route = useLocation();
    const currentPage = {
        "/user/dashboard": "1",
        "/user/link": "2",
    }[route.pathname]

    return (
        <Layout>
            <NavHeader bg={colorBgContainer} >
                <Menu
                    theme={ThemeSettings}
                    mode="horizontal"
                    items={HeaderItems}
                />
            </NavHeader>
            <Layout>
                <SideMenuContainer bg={colorBgContainer} width={250}>
                    <LinkButtonContainer>
                        <LinkButton icon={<PlusOutlined />} type='primary'>Create</LinkButton>
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
