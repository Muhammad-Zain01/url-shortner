import { GoogleButtonContainer } from "./google-button.styles"
import { GoogleOutlined } from "@ant-design/icons"
import { Button } from "../button/button.component"
const GoogleButton = ({ children }) => {
    return (
        <GoogleButtonContainer>
            <Button type='primary' icon={<GoogleOutlined />}>{children}</Button>
        </GoogleButtonContainer>
    )
}

export default GoogleButton