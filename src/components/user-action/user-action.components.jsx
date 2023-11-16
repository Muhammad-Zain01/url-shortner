import React from 'react';
import { Dropdown } from 'antd';
import { UserActionButton, UserAvatar } from './user-action.styles';
import useSession from '../../hook/useSession';

const items = [
    {
        label:
            (
                <div style={{ display: 'flex', padding: 10 }}>
                    <UserAvatar size="large">Z</UserAvatar>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ padding: '0px 10px ' }}>zainmemon</span>
                        <span style={{ fontSize: 12, color: '#979797', padding: '0px 10px ' }}>zain.verge@gmail.com</span>
                    </div>
                </div>
            ),
        key: '0',
    },
    {
        type: 'divider',
    },
    {
        label: "Sign Out",
        key: 'signout',
    },
];


const UserAction = () => {
    const session = useSession();
    const onClick = (value) => {
        if (value.key == 'signout') {
            session.clear();
            window.location.reload();
        }
    };
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
                    <UserAvatar size="large">Z</UserAvatar>
                    <span style={{ padding: '0px 10px ' }}>zainmemon</span>
                </UserActionButton>
            </Dropdown>
        </div>
    )
}
export default UserAction;