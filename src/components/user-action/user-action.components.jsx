import React from 'react';
import { Dropdown } from 'antd';
import { UserActionButton, UserAvatar, UserActionContainer, UserActionDiv, SpanName, SpanEmail } from './user-action.styles';
import useSession from '../../hook/useSession';

const UserAction = () => {
    let SESSION = useSession();
    let session = SESSION != null ? JSON.parse(SESSION.get('user')) : {};
    const items = []
    const onClick = (value) => {
        console.log(value);
        if (value.key == 'signout') {
            SESSION.clear();
            window.location.reload();
        }
    };
    const UserDetails = (
        <UserActionContainer>
            <UserAvatar size="large">Z</UserAvatar>
            <UserActionDiv>
                <SpanName>{session.username}</SpanName>
                <SpanEmail>{session.email}</SpanEmail>
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
                    <UserAvatar size="large">{session.username[0].toUpperCase()}</UserAvatar>
                    <span style={{ padding: '0px 10px ' }}>{session.username}</span>
                </UserActionButton>
            </Dropdown>
        </div >
    )
}
export default UserAction;