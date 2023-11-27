import { Layout, theme } from 'antd';
const { Content, Footer } = Layout;
import { Button } from '../../components/button/button.component';
const HomePage = () => {
    const { token: { colorPrimary } } = theme.useToken();
    return (
        <Layout className="layout">
            <div style={{ padding: '10px 30px', }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <div style={{ display: 'flex', justifyContent: 'start' }} >
                        <img src="/logo.png" style={{ width: 120 }} />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Button type="default" style={{padding: '0px 50px'}}>Sign In</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type="primary" style={{padding: '0px 50px'}}>Sign Up</Button>
                    </div>
                </div>
            </div>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <div style={{ height: '90%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'start' }}>
                    <h1 style={{ fontSize: 50, padding: 40, textAlign: 'start' }}>
                        Your Shortcut to Effortless <br /> <span style={{ color: colorPrimary }}>URL Management</span>
                    </h1>
                    <div >
                        <Button type="primary" style={{ width: 'unset' }}>Shorten Now</Button>
                    </div>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                URL Shortner ©{new Date().getFullYear()} Created by <a href="https://github.com/Muhammad-Zain01">Muhammad Zain</a>
            </Footer>
        </Layout>
    );

}

export default HomePage;