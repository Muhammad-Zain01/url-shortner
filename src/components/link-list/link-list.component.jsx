import { CopyFilled, DeleteOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { message, Avatar, List, Space, Result, Button } from 'antd';
import { MainUrl, OldUrl, TitleContainer, ActionButton, TitleMain } from './link-list.style';
import PrivateNavigate from '../../hook/usePrivateNavigate';
import LinkListSkeleton from './link-list-skeleton.component';
import { removeUrl, GetUrls } from '../../API/API.request';
import { EyeOutlined } from '@ant-design/icons';
import { validateURL } from '../../utils/helper';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon, { style: { fontSize: 15 } })}
        {text}
    </Space>
);
const LinkList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const { adminNavigate } = PrivateNavigate();

    const new_url = (keyword) => (`${import.meta.env.VITE_SERVER_URL}/${keyword}`)
    const handleRequest = async () => {
        setLoading(true);
        const response = await GetUrls()
        if (response?.status == 1) {
            setData(response?.data)
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
        } else {
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
                                            <IconText icon={EyeOutlined} text={item.views} key="" />,
                                            // <IconText icon={TbHandClick} text="156" key="list-vertical-like-o" />,
                                            // <IconText icon={TbHandClick} text="2" key="list-vertical-message" />,
                                        ]}
                                        extra={
                                            <div>
                                                <ActionButton icon={<CopyFilled />} onClick={() => handleCopy(new_url(item.keyword))}>Copy Link</ActionButton>
                                                <ActionButton icon={<DeleteOutlined />} onClick={() => removeURL(item.keyword)}></ActionButton>
                                            </div>
                                        }
                                    >
                                        <List.Item.Meta
                                            avatar={<Avatar style={{ border: '1px solid #abababb5', width: 40, padding: 5, height: 40 }} src={item.icon} />}
                                            title={
                                                <>
                                                    <TitleContainer>
                                                        <TitleMain>
                                                            <a>{item.title}</a>
                                                        </TitleMain>
                                                        <MainUrl href={new_url(item.keyword)} target='_blank'>
                                                            {new_url(item.keyword)}
                                                        </MainUrl> <br />
                                                        <OldUrl href={validateURL(item.url)} target='_blank'>
                                                            {validateURL(item.url)}
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
