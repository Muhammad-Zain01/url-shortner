import React, { useState } from 'react';
import { Result, message } from 'antd';
import { Button } from '../../components/button/button.component';
import { VerificationButtonWrapper, VerificationIllustration, VerificationInputBox, VerificationWrapper } from './verification.styles';
import { isNumeric } from '../../utils/helper';
import { verifyUser } from '../../API/API.request';
import { reload } from '../../utils/helper';
const Verification = () => {
    const [code, setCode] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' })
    const [loading, setLoading] = useState(false);
    const verification_code = Object.values(code).join("");
   
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
    const handleChange = (event) => {
        event.preventDefault();
        const id = event.target.id;
        let value = event.key;
        let keyCode = [32, 9].includes(event.keyCode) ? false : event.keyCode;
        if (keyCode && keyCode == 8) {
            setCode({ ...code, [id]: '' })
            const element = document.getElementById(Number(id) - 1);
            if (element) {
                element.focus();
            }
        } else if (keyCode) {
            if (keyCode == 13) {
                const element = document.getElementById(Number(id) + 1);
                if (element) {
                    element.focus();
                }
                if (id == 6) {
                    handleVerify()
                }
            }
            if (isNumeric(value)) {
                value = value.split('')
                value[value.length - 1]
                setCode({ ...code, [id]: value[value.length - 1] })
                const element = document.getElementById(Number(id) + 1);
                if (element) {
                    element.focus();
                }
            }
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
            <div>
                <VerificationInputBox id="1" onKeyDown={handleChange} value={code[1]} type="text" size="large" />
                <VerificationInputBox id="2" onKeyDown={handleChange} value={code[2]} type="text" size="large" />
                <VerificationInputBox id="3" onKeyDown={handleChange} value={code[3]} type="text" size="large" />
                <VerificationInputBox id="4" onKeyDown={handleChange} value={code[4]} type="text" size="large" />
                <VerificationInputBox id="5" onKeyDown={handleChange} value={code[5]} type="text" size="large" />
                <VerificationInputBox id="6" onKeyDown={handleChange} value={code[6]} type="text" size="large" />
            </div>
            <VerificationButtonWrapper>
                <Button type="default">
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