import React, { useState } from 'react';
import { Result, message } from 'antd';
import { Button } from '../../components/button/button.component';
import { VerificationButtonWrapper, VerificationIllustration, VerificationWrapper } from './verification.styles';
import VerificationInput from '../../components/verification-input/verification-input.component';
import { verifyUser, resendEmail } from '../../API/API.request';
import { reload } from '../../utils/helper';
const Verification = () => {
    const [code, setCode] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' })
    const [loading, setLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const verification_code = Object.values(code).join("");

    const resendCode = async () => {
        const response = await resendEmail();
        if(response.status){
            message.success('Verification code sent')
        }
    }
    const handleVerify = async () => {
        if (verification_code.length == 6) {
            setLoading(true)
            const response = await verifyUser({ code: verification_code })
            if (response.status) {
                message.success('Verification successful')
                reload();
            } else {
                if (response.message == "INVALID_CODE") message.error('Invalid verification code')
                else message.error('Something went wrong')
            }
            setLoading(false)
        } else {
            message.error('Please enter a valid verification code')
        }
    }

    return (
        <VerificationWrapper>
            <Result
                style={{ padding: 30 }}
                icon={<VerificationIllustration src="/verification.svg" alt='verification' />}
                title="Please verify your email"
                subTitle="Please check your email for the verification code we've just sent you."
            />
            <VerificationInput code={code} setCode={setCode} handleVerify={handleVerify} />
            <VerificationButtonWrapper>
                <Button type="default" loading={resendLoading} onClick={resendCode}>
                    Resend
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button type="primary" loading={loading} onClick={handleVerify} >
                    Verify
                </Button>
            </VerificationButtonWrapper>
        </VerificationWrapper>
    )
}
export default Verification;