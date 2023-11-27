import { Layout, theme } from 'antd';
const { Footer } = Layout;
import { useNavigate } from 'react-router-dom';
import { NavBarContainer, NavBar, LogoBox, NavButtons, NavButton, ContentContainer, ContentBox } from './home-page.styles';
const HomePage = () => {
    const { token: { colorPrimary } } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
            <NavBarContainer>
                <NavBar>
                    <LogoBox>
                        <img src="/logo.png" style={{ width: 120 }} />
                    </LogoBox>
                    <NavButtons>
                        <NavButton onClick={() => { navigate('/login') }} type="default" >Sign In</NavButton>
                        &nbsp;&nbsp;&nbsp;
                        <NavButton onClick={() => { navigate('/register') }} type="primary">Sign Up</NavButton>
                    </NavButtons>
                </NavBar>
            </NavBarContainer>
            <ContentContainer>
                <ContentBox>
                    <div style={{ padding: 20 }}>
                        <h1 style={{ fontSize: 50, padding: '20px 0px', textAlign: 'start' }}>
                            Your Shortcut to Effortless<br />  <span style={{ color: colorPrimary }}>URL Management</span>
                        </h1>
                        <div>
                            <NavButton onClick={() => { navigate('/login') }} type="primary" style={{ width: 'unset' }}>Shorten Now</NavButton>
                        </div>
                    </div>
                    <div style={{ padding: 10, border: '1px solid #dbe0eb', borderRadius: 5, width: '80%' }}>
                        <img src="/preview.png" alt="preview" style={{ width: '100%' }} />
                    </div>
                </ContentBox>
            </ContentContainer>
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