import styled from "styled-components";
import { Button } from '../../components/button/button.component';

export const ForgotPasswordContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ForgotPasswordBox = styled.div`
    width: 60%;
`
export const ForgotPasswordContent = styled.div`
    margin-top: 24px;
`

export const ForgotButton = styled(Button)`
    width: unset;
`