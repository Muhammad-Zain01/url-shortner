
import { useState } from "react";
import VerificationInput from "../verification-input/verification-input.component";
import {  message } from "antd";
import { resetCode } from "../../API/API.request";
import { VerficationContainer, VerificationButton, VerificationButtonContainer, VerificationText, VerificationTitle } from "./username-verification.styles";
const UsernameVerification = ({ change, token }) => {
    const [code, setCode] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' })
    const [loading, setLoading] = useState(false);
    const verificationCode = Object.values(code).join('');
    const onSubmit = () => {
        if (verificationCode.length == 6) {
            setLoading(true)
            message.success('Verification code verified successfully')
            resetCode({ token, code: verificationCode })
            setLoading(false)
            change(2)
        } else {
            message.error('Please enter the verification code sent to your email')
        }
    }
    return (
        <VerficationContainer>
            <VerificationTitle> Enter the verification code </VerificationTitle>
            <VerificationText> Please enter the verification code sent to your email </VerificationText>
            <VerificationInput code={code} setCode={setCode} handleVerify={onSubmit} />
            <VerificationButtonContainer>
                <VerificationButton type="default" onClick={() => change(0)}>Back</VerificationButton>
                <VerificationButton type="primary" onClick={onSubmit} loading={loading}>Proceed</VerificationButton>
            </VerificationButtonContainer>
        </VerficationContainer>
    )
}

export default UsernameVerification;