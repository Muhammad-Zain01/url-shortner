import styled, { css } from "styled-components";
import { Button } from "antd";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    
    .container{
        width: 1320px;
    }
    @media only screen and (max-width: 1320px) {
        .container{
            width: 100%;
            padding: 0 20px;
        }
    }
    
    .hero-subtitle {
        color: rgba(255, 255, 255, 0.8);
        font-size: 18px;
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.6;
    }
    
    .gradient-text {
        background: linear-gradient(90deg, #60a5fa, #3b82f6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    .hero-text-container {
        width: 100%;
        text-align: center;
        margin-bottom: 40px;
    }
    
    .hero-image-motion {
        width: 100%;
    }
`

export const HeaderGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: linear-gradient(180deg, rgba(30, 41, 59, 0.45) 0%, rgba(30, 41, 59, 0.5) 100%);
    z-index: -1;
`

export const NavBarContainer = styled.div`
    padding: 10px 0;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(10px);
    background-color: rgba(17, 24, 39, 0.85);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.1), rgba(37, 99, 235, 0.1));
        z-index: -1;
    }
`

export const WebButton = styled(Button)`
    border-radius: 8px;
    height: 45px;
    padding: 0px 35px;
    background-color: transparent;
    color: white;
    font-weight: 500;
    font-size: 15px;
    border: 2px solid white;
    transition: all 0.3s ease;
    
    ${props => props.primary && css`
        background-color: #3b82f6;
        border-color: #3b82f6;
        color: white;
        
        &:hover {
            background-color: #2563eb;
            border-color: #2563eb;
            color: white;
            box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
        }
    `}
    
    &:hover{
        background-color: white;
        color: #3b82f6;
        transform: translateY(-2px);
        box-shadow: 0 4px 14px rgba(255, 255, 255, 0.2);
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
    
    img {
        width: 90px !important;
        transition: all 0.3s ease;
    }
`

export const NavButtons = styled.div`
    display: flex;
    gap: 16px;
`

export const NavButton = styled(WebButton)`
    padding: 0px 20px;
    font-size: 14px;
    height: 34px;
    
    &.ghost-button {
        border-color: rgba(255, 255, 255, 0.5);
        background-color: transparent;
        
        &:hover {
            border-color: white;
            background-color: rgba(255, 255, 255, 0.1);
            color: white;
            box-shadow: none;
        }
    }
    
    @media only screen and (max-width: 959px) {
        font-size: 13px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
        padding: 0px 15px;
    }
`

export const HeroSection = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    padding: 100px 0 40px;
    
    @media only screen and (max-width: 768px) {
        padding: 80px 0 30px;
        min-height: auto;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
        padding: 0;
    }
`

export const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
`

export const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }
`

export const HeroHeading = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    
    .hero-buttons {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        
        @media only screen and (max-width: 480px) {
            flex-direction: column;
            align-items: center;
        }
    }
`

export const Heading = styled.h1`
    font-size: 56px;
    font-weight: 300;
    padding: 20px 0px;
    text-align: center;
    color: white;
    margin-bottom: 20px;
    
    span{
        font-weight: 600;
    }

    @media only screen and (max-width: 959px) {
        font-size: 40px;
    }
    @media only screen and (max-width: 800px) {
        font-size: 32px;
    }
    @media only screen and (max-width: 600px) {
        font-size: 28px;
    }
`

export const HeroButton = styled(motion.button)`
    border-radius: 8px;
    height: 48px;
    padding: 0 30px;
    font-weight: 500;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &.primary-button {
        background-color: #3b82f6;
        color: white;
        box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
        
        &:hover {
            background-color: #2563eb;
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.5);
        }
    }
    
    &.secondary-button {
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        
        &:hover {
            background-color: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
        }
    }
    
    &.white-button {
        background-color: white;
        color: #3b82f6;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
        min-width: 200px;
        
        &:hover {
            background-color: #f8fafc;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
            color: #2563eb;
        }
    }
    
    @media only screen and (max-width: 959px) {
        font-size: 14px;
        height: 44px;
        padding: 0 24px;
    }
    
    @media only screen and (max-width: 480px) {
        width: 100%;
        max-width: 250px;
    }
`

export const HeroImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 50px;
`

export const PreviewImageContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px;
    justify-content: center;
    margin: 0 auto;
    
    img{
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        width: 100%;
        height: auto;
        max-height: 600px;
        object-fit: contain;
        transition: transform 0.3s ease;
        
        &:hover {
            transform: translateY(-5px);
        }
    }
    
    @media only screen and (max-width: 768px) {
        width: 95%;
    }
`

export const PreviewImage = styled.img`
    width: 100%;
`

export const StatsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 0 auto 40px;
    flex-wrap: wrap;
    max-width: 900px;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
        gap: 20px;
    }
    
    @media only screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    flex: 1;
    min-width: 180px;
    justify-content: center;
    
    &:hover {
        transform: translateY(-5px);
        background-color: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
    }
    
    .stat-icon {
        font-size: 24px;
        color: #60a5fa;
        margin-right: 15px;
    }
    
    .stat-content {
        h3 {
            font-size: 20px;
            font-weight: 600;
            color: white;
            margin: 0;
        }
        
        p {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.7);
            margin: 0;
        }
    }
    
    @media only screen and (max-width: 768px) {
        padding: 12px 15px;
        
        .stat-icon {
            font-size: 20px;
            margin-right: 10px;
        }
        
        .stat-content {
            h3 {
                font-size: 18px;
            }
            
            p {
                font-size: 12px;
            }
        }
    }
`
