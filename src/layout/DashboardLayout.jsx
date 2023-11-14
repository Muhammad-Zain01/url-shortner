import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import {
    NavHeader,
    SideMenu,
    LayoutContent,
    LayoutContentContainer,
    SideMenuContainer,
    LinkButtonContainer,
    LinkButton
} from './Layout.style';

import { HeaderItems, SideItems } from './NavItems';

const DashboardLayout = ({ children }) => {
    const { token: { colorBgContainer } } = theme.useToken();
    const [ThemeMode, setThemeMode] = useState(true);
    const ThemeSettings = ThemeMode ? "light" : "dark";
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
                <SideMenuContainer bg={colorBgContainer} width={200}>
                    <LinkButtonContainer>
                        <LinkButton icon={<PlusOutlined />} type='primary'>Create Link</LinkButton>
                    </LinkButtonContainer>
                    <SideMenu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={SideItems}
                    />
                </SideMenuContainer>
                <LayoutContentContainer>
                    <LayoutContent bg={colorBgContainer}>
                        {children}
                    </LayoutContent>
                </LayoutContentContainer>
            </Layout>
        </Layout>
    );
};
export default DashboardLayout;
