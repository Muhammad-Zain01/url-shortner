import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { NavHeader, SideMenu } from './layout.style';

const { Header, Content, Sider } = Layout;


const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});

const MainLayout = () => {
    const { token: { colorBgContainer } } = theme.useToken();
    const [ThemeMode, setThemeMode] = useState(true);
    const ThemeSettings = ThemeMode ? "light" : "dark";
    return (
        <Layout>
            <NavHeader style={{ background: colorBgContainer }}>
                <Menu theme={ThemeSettings} mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
            </NavHeader>
            <Layout>
                <Sider width={200} style={{ background: colorBgContainer }}>
                    <SideMenu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        items={items2}
                    />
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default MainLayout;
