import { theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
    NavBarContainer,
    NavBar,
    LogoBox,
    NavButtons,
    NavButton,
    ContentContainer,
    ContentBox,
    HeroHeading,
    Heading,
    HeroButton,
    PreviewImage,
    PreviewImageContainer,
    Wrapper,
} from './home-page.styles';
import Particle from '../../components/particles/particles.component';
import ProductDetail from './components/product-details.component';
import PageFooter from './components/footer.component';
const HomePage = () => {
    const { token: { colorPrimary } } = theme.useToken();
    const navigate = useNavigate();
    return (
        <>
            <Particle />
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Wrapper>
                    <NavBarContainer>
                        <NavBar className='container'>
                            <LogoBox>
                                <img src="/logo_white.png" style={{ width: 120 }} />
                            </LogoBox>
                            <NavButtons>
                                <NavButton onClick={() => { navigate('/login') }} >Sign In</NavButton>
                                &nbsp;&nbsp;&nbsp;
                                <NavButton onClick={() => { navigate('/register') }}>Sign Up</NavButton>
                            </NavButtons>
                        </NavBar>
                    </NavBarContainer>
                    <ContentContainer>
                        <ContentBox className='container'>
                            <HeroHeading>
                                <Heading>
                                    Your Shortcut to Effortless<br /> <span>URL Management</span>
                                </Heading>
                                <div style={{ textAlign: 'center' }}>
                                    <HeroButton onClick={() => { navigate('/login') }}>Shorten Now</HeroButton>
                                </div>
                            </HeroHeading>
                            <PreviewImageContainer>
                                <PreviewImage src="/preview.png" alt="preview" />
                            </PreviewImageContainer>
                        </ContentBox>
                    </ContentContainer>
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', background: "white" }}>
                        <ProductDetail />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', background: "#273140" }}>
                        <PageFooter />
                    </div>
                </Wrapper>
            </div>
        </>
    );

}

export default HomePage;