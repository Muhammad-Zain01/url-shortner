import styled from "styled-components";
import { Button } from "../../components/button/button.component";
import { Layout } from "antd";
const { Content,Footer } = Layout;

export const NavBarContainer = styled.div`
    padding: 10px 30px;
`
export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoBox = styled.div`
    display: flex;
    justify-content: start;
`
export const NavButtons = styled.div`
    display: flex;
`
export const NavButton = styled(Button)`
    padding: 0px 30px;
`

export const ContentContainer = styled(Content)`
    padding: 0px 50px;
`
export const ContentBox = styled.div`
    display: flex;
    height: 90%;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        height:100%;
        justify-content: center;
    }
`

export const HeroHeading  =styled.div`
    padding: 20px;
   
`
export const Heading = styled.h1`
    font-size: 50px;
    padding: 20px 0px;
    text-align: start;

    @media only screen and (max-width: 1196px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 800px) {
        font-size: 25px;
    }
    @media only screen and (max-width: 1000px) {
        text-align: center
    }
    
`
export const HeroButton = styled(NavButton)`
    width: 40%;
    margin: 10px;
    @media only screen and (max-width: 1000px) {
        width: 100% !important;
    }
   
`

export const PreviewImageContainer = styled.div`
    padding: 10px;
    border: 1px solid #dbe0eb;
    border-radius: 5px;
    width: 80%;
`
export const PreviewImage = styled.img`
    width: 100%;
`
