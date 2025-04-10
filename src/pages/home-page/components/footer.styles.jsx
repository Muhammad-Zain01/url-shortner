import styled from "styled-components";

export const FooterContainer = styled.div`
    padding: 80px 0;
    color: white;
    max-width: 1000px;
    margin: 0 auto;
`

export const FooterTitle = styled.h1`
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 30px;
    color: white;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    
    img {
        border-radius: 50%;
        border: 4px solid rgba(255, 255, 255, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: scale(1.05);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);
        }
    }
`

export const FooterDeveloperDescriptionContainer = styled.div`
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.7;
    
    h2 {
        font-size: 28px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 24px;
        color: white;
    }
    
    h3 {
        font-size: 22px;
        font-weight: 500;
        margin: 30px 0 15px;
        color: white;
    }
    
    h4 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
        color: #60a5fa;
    }
    
    p {
        margin-bottom: 20px;
        font-size: 16px;
        font-weight: 300;
    }
    
    .intro-text {
        font-size: 17px;
        line-height: 1.8;
    }
    
    .tools-section {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin: 20px 0;
        
        .tool-category {
            flex: 1;
            min-width: 200px;
            background-color: rgba(255, 255, 255, 0.05);
            padding: 20px;
            border-radius: 10px;
            transition: transform 0.3s ease;
            
            &:hover {
                transform: translateY(-5px);
                background-color: rgba(255, 255, 255, 0.08);
            }
            
            p {
                margin-bottom: 0;
            }
        }
    }
    
    .services-list {
        list-style-type: none;
        padding-left: 0;
        
        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 15px;
            
            &:before {
                content: "✓";
                position: absolute;
                left: 0;
                color: #60a5fa;
                font-weight: bold;
            }
        }
    }
`