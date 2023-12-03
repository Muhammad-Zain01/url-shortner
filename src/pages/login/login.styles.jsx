import styled from "styled-components";
export const LoginContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
`
export const LoginBox = styled.div`
    width: 35%; 
    height: 50%;
    @media only screen and (max-width: 886px) {
        width: 80%; 
    }
    @media only screen and (max-width: 400px) {
        width: 90%; 
    }
`