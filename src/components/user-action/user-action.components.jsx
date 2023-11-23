import React, { useEffect, useState } from 'react';
import { Dropdown } from 'antd';
import { UserActionButton, UserAvatar, UserActionContainer, UserActionDiv, SpanName, SpanEmail } from './user-action.styles';
import useSession from '../../hook/useSession';
import { useUser } from '../../hook/useUser'

const UserAction = () => {
    const { displayName, email } = useUser();
    let SESSION = useSession();
    const items = []
    const onClick = (value) => {
        if (value.key == 'signout') {
            SESSION.clear();
            window.location.reload();
        }
    };
    const UserDetails = (
        <UserActionContainer>
            <UserAvatar size="large">Z</UserAvatar>
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
                    <UserAvatar size="large">{displayName[0].toUpperCase()}</UserAvatar>
                    <span style={{ padding: '0px 10px ' }}>{displayName}</span>
                </UserActionButton>
            </Dropdown>
        </div >
    )
}
export default UserAction;