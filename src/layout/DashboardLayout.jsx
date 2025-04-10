import React, { useState, useEffect } from 'react';
import { PlusOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, theme, Tooltip } from 'antd';
import {
    NavHeader,
    SideMenu,
    LayoutContent,
    LayoutContentContainer,
    SideMenuContainer,
    LinkButtonContainer,
    LinkButton,
    Arrow,
    SidebarFooter
} from './layout.style';

import { useLocation } from 'react-router-dom';
import NavItems from './NavItems';
import UserAction from '../components/user-action/user-action.components';
import usePrivateNavigate from '../hook/usePrivateNavigate'
import Logo from '../components/logo/logo.component';

const DashboardLayout = ({ children }) => {
    const { token: { colorBgContainer, colorPrimary } } = theme.useToken();
    const { adminNavigate } = usePrivateNavigate();
    const [collapsed, setCollapsed] = useState(window.innerWidth < 992 ? true : false);
    const route = useLocation();
    
    // Handle window resize for responsive sidebar
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 992) {
                setCollapsed(true);
            }
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    // Get current page for menu highlighting
    const currentPage = {
        "dashboard": "1",
        "link": "2",
        "analytics": "3",
        "settings": "4",
    }[route.pathname.split('/')[route.pathname.split('/').length - 1]] || "1";
    
    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
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
                        <Tooltip 
                            title={collapsed ? "Expand menu" : "Collapse menu"} 
                            placement={collapsed ? "right" : "left"}
                        >
                            <Arrow 
                                side={!collapsed ? 'left' : 'right'} 
                                onClick={() => setCollapsed(!collapsed)} 
                            />
                        </Tooltip>

                        <LinkButtonContainer>
                            <Tooltip title={collapsed ? "Create new link" : ""}>
                                <LinkButton 
                                    onClick={() => { adminNavigate('link/add') }} 
                                    style={{ width: '100%' }} 
                                    type='primary'
                                    icon={collapsed && <PlusOutlined />}
                                >
                                    {!collapsed && "Create new link"}
                                </LinkButton>
                            </Tooltip>
                        </LinkButtonContainer>
                        
                        <SideMenu
                            ico={colorPrimary}
                            mode="inline"
                            defaultSelectedKeys={[currentPage]}
                            items={NavItems.map(item => ({
                                ...item,
                                title: item.title
                            }))}
                        />
                        
                        {!collapsed && (
                            <SidebarFooter collapsed={collapsed}>
                                <p>URL Shortener v1.0</p>
                            </SidebarFooter>
                        )}
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
