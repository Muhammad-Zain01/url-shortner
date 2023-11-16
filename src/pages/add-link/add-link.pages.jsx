import DashboardLayout from "../../layout/DashboardLayout"
import { Container, Box, LinkContainer } from "./add-link.style"
import { Typography, Divider, Form } from "antd"
import { Input } from "../../components/input/input.component"
import { Button } from "../../components/button/button.component"
import { isValidUrl, TitleParser } from "../../utils/helper"
import { useRef, useState } from "react"
const AddLink = () => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')
    const [urlConfig, setUrlConfig] = useState({
        hasFeedback: false,
        validateStatus: "",
        help: ""
    });
    const urlValidation = async (value) => {
        if (isValidUrl(value)) {
            setUrlConfig({
                hasFeedback: true,
                validateStatus: "validating",
                help: ""
            })
            const ParsedTitle = await TitleParser(value);
            setTitle(ParsedTitle)
            setUrlConfig({
                hasFeedback: true,
                validateStatus: "success",
                help: ""
            })
            return true;
        } else {
            setUrlConfig({
                hasFeedback: true,
                validateStatus: "error",
                help: "Please add valid url."
            })
            return false;
        }
    }
    const onSubmit = async (value) => {
        const { url, backhalf } = value
        const urlValidated = await urlValidation(url);
        if (urlValidated) {
            console.log(url)
            console.log(backhalf)
            console.log(title)
        }
    }
    const HandleUrl = async (event) => {
        const value = event.target.value;

    }
    return (
        <DashboardLayout>
            <Container>
                <Box>
                    <Typography.Title level={2}>
                        Create new
                    </Typography.Title>

                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        layout="vertical"
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            name="url"
                            label="Destination URL"
                            hasFeedback={urlConfig.hasFeedback}
                            validateStatus={urlConfig.validateStatus}
                            help={urlConfig.help}
                        >
                            <Input prefix="" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="example.com/long-url" onBlur={HandleUrl} />
                        </Form.Item>
                        <Form.Item label="Title">
                            <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Item>
                        <LinkContainer>
                            <Form.Item label="Domain" style={{ width: '100%' }}>
                                <Input disabled value="bit.ly" />
                            </Form.Item>
                            <span style={{ margin: '0 10px' }}>/</span>
                            <Form.Item name="backhalf" label="Custom back-half (optional)" style={{ width: '100%' }} >
                                <Input />
                            </Form.Item>
                        </LinkContainer>
                        <Divider />
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Add</Button>
                        </Form.Item>
                    </Form>
                </Box>
            </Container>
        </DashboardLayout>
    )
}
export default AddLink