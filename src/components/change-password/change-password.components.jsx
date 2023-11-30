import { Typography } from "antd";
import { Input } from '../input/input.component'
import { Wrapper, PasswordContainer } from "./change-password.styles";
import { Button } from '../button/button.component'
import { useState } from "react";
import { message } from "antd";
import { updatePassword } from "../../API/API.request";
const ChangePassword = () => {
    const [passwordState, setPasswordState] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    })
    const onSubmit = async () => {
        const { currentPassword, newPassword, confirmPassword } = passwordState;
        if (currentPassword == '' || newPassword == '' || confirmPassword == '') {
            message.warning('Please fill all fields')
            return false;
        }
        if (newPassword !== confirmPassword) {
            message.warning('Passwords do not match')
            return false;
        }
        if (currentPassword == newPassword) {
            message.warning('New password cannot be same as current password')
            return false;
        }
        const data = { currentPassword, newPassword }
        const response = await updatePassword(data);
        if(response?.status){
            message.success('Password changed successfully')
        }else{
            message.error('Something went wrong')
        }
    }
    return (
        <PasswordContainer>
            <Typography.Title level={3}>Security & authentication</Typography.Title>
            <Wrapper>
                <Typography.Title level={5}>Current passowrd</Typography.Title>
                <Input type="password" onChange={e => setPasswordState({ ...passwordState, currentPassword: e.target.value })} />
            </Wrapper>
            <Wrapper>
                <Typography.Title level={5}>New passowrd</Typography.Title>
                <Input type="password" onChange={e => setPasswordState({ ...passwordState, newPassword: e.target.value })} />
            </Wrapper>
            <Wrapper>
                <Typography.Title level={5}>Confirm new passowrd</Typography.Title>
                <Input type="password" onChange={e => setPasswordState({ ...passwordState, confirmPassword: e.target.value })} />
            </Wrapper>
            <Button width="unset" height="40" type="primary" onClick={onSubmit}>Update password</Button>
        </PasswordContainer>
    )
}
export default ChangePassword;