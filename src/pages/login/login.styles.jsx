import styled from "styled-components";
export const LoginContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
`
export const LoginBox = styled.div`
    width: 380px;
    padding: 32px; 
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    @media only screen and (max-width: 480px) {
        width: 90%; 
        padding: 24px;
    }
    background: white;
`
export const FormTitle = styled.h1`
    font-size: 24px;
    font-weight: 500;
    color: #333;
    margin-bottom: 24px;
    text-align: center;
`
export const FooterText = styled.div`
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    color: #666;
    
    a {
        color: #1890ff;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
`