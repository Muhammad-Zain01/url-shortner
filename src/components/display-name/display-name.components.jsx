import React from "react";
import { Typography, message } from "antd";
import { Input } from '../input/input.component'
import { DisplayContainer } from "./display-name.styles";
import { Button } from "../button/button.component";
import { updateDisplayName } from "../../API/API.request";
const DisplayName = ({ name, setName }) => {
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const onSubmit = async () => {
        const response = await updateDisplayName({ name })
        if (response?.status) { message.success('Display name updated successfully') }
    }
    return (
        <DisplayContainer>
            <Typography.Title level={3}>Profile</Typography.Title>
            <Typography.Title level={5}>Display name</Typography.Title>
            <Input value={name} onChange={handleNameChange} />
            <Button
                width="unset"
                height="40"
                vgap="true"
                type="primary"
                onClick={onSubmit}
            >
                Update display name
            </Button>
        </DisplayContainer>
    )
}

export default DisplayName;