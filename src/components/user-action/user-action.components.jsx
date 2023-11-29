import React from 'react';
import { Dropdown } from 'antd';
import { UserActionButton, UserAvatar, UserActionContainer, UserActionDiv, SpanName, SpanEmail } from './user-action.styles';
import { useUser } from '../../hook/useUser'
import { SignOut } from '../../utils/helper';
const UserAction = () => {
    const { displayName, email } = useUser();
    const items = []
    const onClick = (value) => {
        if (value.key == 'signout') {
            SignOut()
        }
    };
    const UserDetails = (
        <UserActionContainer>
            <UserAvatar size="large">{displayName != '' && displayName[0].toUpperCase()}</UserAvatar>
            <UserActionDiv>
                <SpanName>{displayName}</SpanName>
                <SpanEmail>{email}</SpanEmail>
            </UserActionDiv>
        </UserActionContainer>
    )

    items.push({ label: UserDetails, key: '0' })
    items.push({ type: 'divider' })
    items.push({ label: "Sign Out", key: 'signout' })

    return (
        <div>
            <Dropdown
                menu={{
                    items,
                    onClick,
                }}
                trigger={["click"]}
            >
                <UserActionButton>
                    <UserAvatar size="large">{displayName != '' && displayName[0].toUpperCase()}</UserAvatar>
                    <span style={{ padding: '0px 10px ' }}>{displayName}</span>
                </UserActionButton>
            </Dropdown>
        </div >
    )
}
export default UserAction;