import { Card, Typography, Progress } from "antd";
import CardLabel from "./card-label.component";
const UsageCard = () => {
    return (
        <>
            <Card bordered={false} style={{ width: '33%' }}>
                <Typography.Title level={4}>Usage This Month</Typography.Title>
                <div>
                    <CardLabel label="Links" total={10} used={2}/>
                    <Progress percent={50} showInfo={false} />
                </div>
                <div>
                    <CardLabel label="Links" total={10} used={2}/>
                    <Progress percent={50} showInfo={false} />
                </div>
                <div>
                    <CardLabel label="Links" total={10} used={2}/>
                    <Progress percent={50} showInfo={false} />
                </div>
            </Card>
        </>
    )
}
export default UsageCard;