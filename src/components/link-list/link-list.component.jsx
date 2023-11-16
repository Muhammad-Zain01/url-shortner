import { CopyFilled, EditFilled, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React, { useEffect, useState, useCallback } from 'react';
import { Avatar, List, Space, Skeleton } from 'antd';
import { MainUrl, OldUrl, TitleContainer, ActionButton, SkeletonBox } from './link-list.style';
import { Post } from "../../utils/API"
import useSession from '../../hook/useSession';
import { IconParser } from '../../utils/helper';
import LinkListSkeleton from './link-list-skeleton.component';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const LinkList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const session = JSON.parse(useSession().get('user'))
    const parse = useCallback(
        async (item) => {
            let avatar = await IconParser(item.url)
            let new_url = "https://bit.ly/" + item.keyword
            const data = {
                url: item.url,
                new_url,
                title: item.title,
                avatar
            };
            return data
        },
        [],
    )

    useEffect(() => {
        const handleRequest = async () => {
            setLoading(true)
            const response = await Post("/events/get-urls", { user: session });
            if (response?.status == 1) {
                let result = response?.data.map(await parse)
                result = await Promise.all(result);
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
                                                    <a href={item.url}>
                                                        {item.title}
                                                    </a><br />
                                                    <MainUrl>
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
                )
            }
        </>
    )
};
export default LinkList;
