import React, { useState } from 'react';
import { Steps } from 'antd';
import Email from '../../components/email/email.components';
const ForgotPassword = () => {
    const [current, setCurrent] = useState("Email");
    const items = ['Email', 'Email Verification', 'Change Password'].map((item, idx) => ({
        key: idx,
        title: item,
    }));
    console.log(current);
    return (
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
            <div style={{ width: '60%' }}>
                <Steps current={current} items={items} />
                <div style={{ marginTop: 24 }}>
                    {
                        current == "Email" && <Email />
                    }
                </div>
            </div>
        </div>
    );

}
export default ForgotPassword;