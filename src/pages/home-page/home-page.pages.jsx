import { useNavigate } from "react-router-dom";
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
  HeroSection,
  HeroImageWrapper,
  HeaderGradient,
  StatsContainer,
  StatItem,
} from "./home-page.styles";
import Particle from "../../components/particles/particles.component";
import ProductDetail from "./components/product-details.component";
import PageFooter from "./components/footer.component";
import { motion } from "framer-motion";
import { LinkOutlined, UserOutlined, BarChartOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { setPageTitle } from "../../utils/setPageTitle";

const HomePage = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    setPageTitle("URL Shortener - Simplify Your Links");
  }, []);
  
  return (
    <>
      <Particle />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Wrapper>
          <HeaderGradient />
          <NavBarContainer>
            <NavBar className="container">
              <LogoBox>
                <motion.img 
                  src="/logo_white.png" 
                  style={{ width: '90px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  alt="URL Shortener Logo"
                />
              </LogoBox>
              <NavButtons>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <NavButton
                    onClick={() => {
                      navigate("/login");
                    }}
                    className="ghost-button"
                  >
                    Sign In
                  </NavButton>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <NavButton
                    onClick={() => {
                      navigate("/register");
                    }}
                    primary
                  >
                    Sign Up
                  </NavButton>
                </motion.div>
              </NavButtons>
            </NavBar>
          </NavBarContainer>
          
          <HeroSection>
            <ContentContainer>
              <ContentBox className="container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="hero-text-container"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  <HeroHeading>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Heading>
                        Your Shortcut to <b>Effortless</b>
                        <br /> <span>URL Management</span>
                      </Heading>
                    </motion.div>
                    
                    <motion.p 
                      className="hero-subtitle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      Create shorter, more manageable links with our powerful URL shortening service.
                      Track clicks, customize links, and optimize your online presence.
                    </motion.p>
                    
                    <motion.div 
                      className="hero-buttons"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      style={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <HeroButton
                        onClick={() => {
                          navigate("/login");
                        }}
                        className="white-button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Get Started
                      </HeroButton>
                    </motion.div>
                  </HeroHeading>
                </motion.div>
                
                <HeroImageWrapper>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-image-motion"
                    style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                  >
                    <PreviewImageContainer style={{ margin: '0 auto' }}>
                      <PreviewImage src="/preview.png" alt="URL Shortener Preview" />
                    </PreviewImageContainer>
                  </motion.div>
                </HeroImageWrapper>
                
                <StatsContainer>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <StatItem>
                      <LinkOutlined className="stat-icon" />
                      <div className="stat-content">
                        <h3>10M+</h3>
                        <p>Links Shortened</p>
                      </div>
                    </StatItem>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <StatItem>
                      <UserOutlined className="stat-icon" />
                      <div className="stat-content">
                        <h3>5K+</h3>
                        <p>Active Users</p>
                      </div>
                    </StatItem>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <StatItem>
                      <BarChartOutlined className="stat-icon" />
                      <div className="stat-content">
                        <h3>99.9%</h3>
                        <p>Uptime</p>
                      </div>
                    </StatItem>
                  </motion.div>
                </StatsContainer>
              </ContentBox>
            </ContentContainer>
          </HeroSection>
          
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              background: "white",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ProductDetail />
          </motion.div>
          <motion.div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              background: "#1f2937",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <PageFooter />
          </motion.div>
        </Wrapper>
      </div>
    </>
  );
};

export default HomePage;
