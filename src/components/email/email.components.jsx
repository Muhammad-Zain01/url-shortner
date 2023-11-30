import { Input } from '../input/input.component'
import { Typography, message } from 'antd'
import { useState } from 'react'
import { forgotPasswordEmailVerify } from '../../API/API.request'
import { useNavigate } from "react-router-dom"
import { EmailButton, EmailButtonContainer, EmailContainer, EmailText, EmailTitle } from './email.styles'

const Email = ({ change, setToken }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit = async () => {
        setLoading(true)
        const response = await forgotPasswordEmailVerify({ username })
        if (response.status) {
            setToken(response.token);
            message.success('We have sent a reset code to your email.')
            change(1)
        } else {
            message.error('Username is not valid')
        }
        setLoading(false)
    }
    return (
        <EmailContainer>
            <EmailTitle>
                Reset your Password
            </EmailTitle>
            <EmailText>
                If the username you enter matches an account, we'll send a reset code to:
            </EmailText>
            <Input
                placeholder="Enter your username to proceed"
                onKeyDown={(e) => e.keyCode == 13 && onSubmit()}
                onChange={(e) => setUsername(e.target.value)}
            />
            <EmailButtonContainer>
                <EmailButton type="default" onClick={() => navigate('/login')}>Back</EmailButton>
                <EmailButton type="primary" onClick={onSubmit} loading={loading}>Proceed</EmailButton>
            </EmailButtonContainer>
        </EmailContainer>
    )
}

export default Email;