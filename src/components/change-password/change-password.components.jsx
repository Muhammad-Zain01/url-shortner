import { Typography } from "antd";
import { Input } from '../input/input.component'
import { Wrapper, PasswordContainer } from "./change-password.styles";
import { Button } from '../button/button.component'
const ChangePassword = () => {
    return (
        <PasswordContainer>
            <Typography.Title level={3}>Security & authentication</Typography.Title>
            <Wrapper>
                <Typography.Title level={5}>Current passowrd</Typography.Title>
                <Input type="password" />
            </Wrapper>
            <Wrapper>
                <Typography.Title level={5}>New passowrd</Typography.Title>
                <Input type="password" />
            </Wrapper>
            <Wrapper>
                <Typography.Title level={5}>Confirm new passowrd</Typography.Title>
                <Input type="password" />
            </Wrapper>
            <Button width="unset" height="40" type="primary">Update password</Button>
        </PasswordContainer>
    )
}
export default ChangePassword;