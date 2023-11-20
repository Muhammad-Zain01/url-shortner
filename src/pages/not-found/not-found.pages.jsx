import { Result, Button } from "antd";
import { NotFoundContainer } from "./not-found.styles";
const NotFound = () => {
    return (
        <NotFoundContainer>
            <Result
                status="404"
                title="Invalid URL"
                subTitle="Apologies, the URL you have clicked is either invalid or does not exist. Please check the address and try again."
                extra={<Button href="/" type="primary">Back Home</Button>}
            />
        </NotFoundContainer>
    )
}

export default NotFound;