import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Layout, theme } from 'antd';
import {
    NavHeader,
    SideMenu,
    LayoutContent,
    LayoutContentContainer,
    SideMenuContainer,
    LinkButtonContainer,
    LinkButton,
    Arrow
} from './layout.style';

import { useLocation } from 'react-router-dom';
import { SideItems } from './NavItems';
import UserAction from '../components/user-action/user-action.components';
import usePrivateNavigate from '../hook/usePrivateNavigate'
import Logo from '../components/logo/logo.component';
const DashboardLayout = ({ children }) => {
    const { token: { colorBgContainer, colorPrimary } } = theme.useToken();
    const { adminNavigate } = usePrivateNavigate();
    const [collapsed, setCollapsed] = useState(window.innerWidth < 992 ? true : false);
    const route = useLocation();
    const currentPage = {
        "dashboard": "1",
        "link": "2",
        "add": "2",
        "analytics": "3",
        "settings": "4",
    }[route.pathname.split('/')[route.pathname.split('/').length - 1]]
    return (
        <>
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
                        <Logo collapsed={collapsed} />
                        <Arrow side={!collapsed ? 'left' : 'right'} onClick={() => setCollapsed(!collapsed)} />

                        <LinkButtonContainer>
                            <LinkButton onClick={() => { adminNavigate('link/add') }} style={{ width: '100%' }} type='primary'>{!collapsed ? `Create new` : <PlusOutlined />}</LinkButton>
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
        </>
    );
};
export default DashboardLayout;
