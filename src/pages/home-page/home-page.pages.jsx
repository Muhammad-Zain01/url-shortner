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
    WebButton,
    Wrapper,
} from './home-page.styles';
import Particle from '../../components/particles/particles.component';

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
                    <div style={{ position: 'relative', background: "white" }}>
                        Modern tools
                        Partnership or temporary organization perfectly designed.
                        <br /><br />
                        <br /><br />
                        Boost performance
                        GRID displays your content in an eye-catching way and enables customizable internal distribution.
                        <br /><br />
                        <br /><br />

                        Higly customizable
                        Key features flexible layouts and themes to customize your content's unique look.
                        <br /><br />
                        <br /><br />

                        Simplified workflow
                        Key is the first-ever truly team-friendly media CMS. Collaborating on content is efficient.
                        <br /><br />
                        <br /><br />

                        Cross platform
                        Credibly innovate granular internal or "organic" sources whereas high standards in web-readiness.
                        <br /><br />


                    </div>
                </Wrapper>
            </div>
        </>
    );

}

export default HomePage;