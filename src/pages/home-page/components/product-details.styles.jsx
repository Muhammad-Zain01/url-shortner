import styled from "styled-components";
import { Typography } from "antd";

export const ProductDetailsContainer = styled.div`
    padding: 80px 0px;
`

export const ProductTitle = styled(Typography.Title)`
    margin: 0px !important;
    font-size: 40px !important;
    font-weight: 500 !important;
    padding: 20px 0px !important;
    text-align: center;
    color: #1f2937 !important;
`

export const ProductSubtitle = styled(Typography.Title)`
    font-size: 18px !important;
    padding: 10px 0px 40px !important;
    text-align: center;
    font-weight: 300 !important;
    color: #4b5563 !important;
    max-width: 800px;
    margin: 0 auto !important;
`

export const ProductWrapper = styled.div`
    display: flex;
    margin-top: 30px;
    justify-content: center;
    gap: 30px;
    
    @media only screen and (max-width: 960px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ProductCard = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 30px;
    border-radius: 12px;
    background-color: #fff;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        margin: 0 auto 20px;
        border-radius: 50%;
        background-color: rgba(59, 130, 246, 0.1);
    }
    
    h2 {
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        margin: 16px 0px;
        color: #1f2937;
    }
    
    p {
        text-align: center;
        font-size: 16px;
        font-weight: 300;
        color: #4b5563;
        line-height: 1.6;
        margin-bottom: 25px;
    }
    
    .card-footer {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    
    .learn-more {
        background-color: transparent;
        border: 1px solid #3b82f6;
        color: #3b82f6;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        
        &:hover {
            background-color: #3b82f6;
            color: white;
        }
    }
    
    @media only screen and (max-width: 960px) {
        margin-bottom: 30px;
        max-width: 100%;
    }
`
