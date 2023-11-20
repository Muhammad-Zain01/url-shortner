import { Result, Button } from "antd";
const NotFound = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <Result
                status="404"
                title="Invalid URL"
                subTitle="Apologies, the URL you have clicked is either invalid or does not exist. Please check the address and try again."
                extra={<Button href="/" type="primary">Back Home</Button>}
            />
        </div>
    )
}

export default NotFound;