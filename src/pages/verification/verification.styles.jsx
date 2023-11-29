import styled from "styled-components";
import { Input } from "../../components/input/input.component";

export const VerificationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100vw;
    height: 100vh;
`
export const VerificationIllustration = styled.img`
    width: 400px;
`
export const VerificationInputBox = styled(Input)`
    font-size: 23px;
    width: 65px;
    height: 60px;
    margin: 0px 3px;
    text-align: center !important;
    caret-color: transparent;
`
export const VerificationButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
`