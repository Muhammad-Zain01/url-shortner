import { CopyFilled, EditFilled, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Avatar, List, Space, Result, Button } from 'antd';
import { MainUrl, OldUrl, TitleContainer, ActionButton } from './link-list.style';
import PrivateNavigate from '../../hook/usePrivateNavigate';
import LinkListSkeleton from './link-list-skeleton.component';
import { GetUrls } from '../../API/API.request';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const LinkList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const { adminNavigate } = PrivateNavigate();

    useEffect(() => {
        const handleRequest = async () => {
            setLoading(true);
            const response = await GetUrls()
            if (response?.status == 1) {
                let result = response?.data.map((item) => {
                    let avatar = item.icon
                    let new_url = `${import.meta.env.VITE_DOMAIN_URL}/go/${item.keyword}`
                    const data = {
                        url: item.url,
                        new_url,
                        title: item.title,
                        avatar
                    };
                    return data
                })
                setData(result)
                setLoading(false)
            }
        }
        handleRequest()
    }, [])
    return (
        <>
            {
                loading ? (
                    <>
                        <LinkListSkeleton />
                    </>
                ) : (

                    data.length > 0 ? (
                        <List
                            itemLayout="vertical"
                            dataSource={data}
                            renderItem={(item) => (
                                <>
                                    <List.Item
                                        style={{ background: 'white', border: '.1rem solid #dbe0eb', padding: 40, marginBottom: 20, borderRadius: '0.5rem' }}
                                        key={item.title}
                                        actions={[
                                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                        ]}
                                        extra={
                                            <div>
                                                <ActionButton icon={<CopyFilled />}>Copy Link</ActionButton>
                                                <ActionButton icon={<EditFilled />}></ActionButton>
                                            </div>
                                        }
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar style={{ border: '1px solid #abababb5', width: 40, padding: 5, height: 40 }} src={item.avatar} />}
                                            title={
                                                <>
                                                    <TitleContainer>
                                                        <a>
                                                            {item.title}
                                                        </a><br />
                                                        <MainUrl onClick={() => window.location.href = (`${item.new_url}`)}>
                                                            {item.new_url}
                                                        </MainUrl><br />
                                                        <OldUrl>
                                                            {item.url}
                                                        </OldUrl>
                                                    </TitleContainer>
                                                </>
                                            }
                                        />
                                    </List.Item>
                                </>
                            )}
                        />
                    ) : (
                        <Result
                            status="404"
                            title="No Links Found"
                            extra={
                                <Button type="primary" onClick={() => adminNavigate('link/add')}>Create Link</Button>
                            }
                        />
                    )

                )

            }

        </>
    )
};
export default LinkList;
