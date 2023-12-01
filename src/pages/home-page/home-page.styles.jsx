import styled, { css } from "styled-components";
import { Layout, Button } from "antd";
const { Content, Footer } = Layout;


export const Wrapper = styled.div`
    width: 100%;
    .container{
        width: 1320px;
    }
    @media only screen and (max-width: 1320px) {
        .container{
            width: 100%;
        }
    }
`


export const NavBarContainer = styled.div`
    padding: 25px 0;
    display: flex;
    justify-content: center;
`


export const WebButton = styled(Button)`
    border-radius: 0px;
    height: 45px;
    padding: 0px 35px;
    background-color: transparent;
    color:white;
    font-weight: 500;
    font-size: 15px;
    border: 2px solid white;
    &:hover{
        background-color: white;
        color: #1681ee;
    }
    
`


export const NavBar = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
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
export const NavButton = styled(WebButton)`
    padding: 0px 20px;
    font-size: 14px;
    height: 40px;
    @media only screen and (max-width: 959px) {
        font-size:13px;
    }
    @media only screen and (max-width: 600px) {
        font-size:10px;
        padding: 0px 10px;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
export const ContentBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    
    /* @media only screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        height:100%;
        justify-content: center;
    } */
`

export const HeroHeading = styled.div`
    padding: 20px;
   
`

export const Heading = styled.h1`
    font-size: 50px;
    font-weight: 300;
    padding: 20px 0px;
    text-align: center;
    color: white;
    span{
        font-weight: 400;
    }

    @media only screen and (max-width: 959px) {
        font-size: 30px;
    }
    @media only screen and (max-width: 800px) {
        font-size: 25px;
    }
    @media only screen and (max-width: 1000px) {
        text-align: center
    }
    
`
export const HeroButton = styled(WebButton)`
    @media only screen and (max-width: 959px) {
        font-size:14px;
    }
`

export const PreviewImageContainer = styled.div`
    margin-top: 40px;
    display: flex;
    width: 80%;
    justify-content: center;
    img{
        box-shadow: rgb(0 0 0 / 26%) 0px 48px 100px 0px;
        width: 100%;
    }
`
export const PreviewImage = styled.img`
    width: 100%;
`
