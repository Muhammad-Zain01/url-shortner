import { CopyFilled, DeleteOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { message, Avatar, List, Space, Result, Button } from 'antd';
import { MainUrl, OldUrl, TitleContainer, ActionButton } from './link-list.style';
import PrivateNavigate from '../../hook/usePrivateNavigate';
import LinkListSkeleton from './link-list-skeleton.component';
import { GetUrls } from '../../API/API.request';
import { removeUrl } from '../../API/API.request';
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

    const handleRequest = async () => {
        setLoading(true);
        const response = await GetUrls()
        if (response?.status == 1) {
            let result = response?.data.map((item) => {
                let avatar = item.icon
                let new_url = `${import.meta.env.VITE_SERVER_URL}/${item.keyword}`
                const data = {
                    url: item.url,
                    new_url,
                    title: item.title,
                    avatar,
                    keyword: item.keyword
                };
                return data
            })
            setData(result)
            setLoading(false)
        }
    }
    const handleCopy = async (url) => {
        navigator.clipboard.writeText(url)
        message.success('Link copied successfully');
    }
    useEffect(() => {
        handleRequest()
    }, [])
    const removeURL = async (keyword) => {
        const response = await removeUrl(keyword);
        if (response?.status) {
            message.success('Link deleted successfully');
            handleRequest();
        }else{
            message.success('Link was unable to delete');
        }
    }
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
                                                <ActionButton icon={<CopyFilled />} onClick={() => handleCopy(item.new_url)}>Copy Link</ActionButton>
                                                <ActionButton icon={<DeleteOutlined />} onClick={() => removeURL(item.keyword)}></ActionButton>
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
