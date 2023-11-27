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
} from './home-page.styles';


const HomePage = () => {
    const { token: { colorPrimary } } = theme.useToken();
    const navigate = useNavigate();
    return (
        <div>
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
                        <HeroHeading>
                            <Heading>
                                Your Shortcut to Effortless<br />  <span style={{ color: colorPrimary }}>URL Management</span>
                            </Heading>
                            <div>
                                <HeroButton onClick={() => { navigate('/login') }} type="primary" style={{ width: '50%' }}>Shorten Now</HeroButton>
                            </div>
                        </HeroHeading>
                        <PreviewImageContainer>
                            <PreviewImage src="/preview.png" alt="preview" />
                        </PreviewImageContainer>
                    </ContentBox>
                </ContentContainer>
        </div>
    );

}

export default HomePage;