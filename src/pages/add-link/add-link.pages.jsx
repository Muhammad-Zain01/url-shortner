import DashboardLayout from "../../layout/DashboardLayout"
import { Container, Box, LinkContainer } from "./add-link.style"
import { Typography, Divider, Form } from "antd"
import { Input } from "../../components/input/input.component"
import { Button } from "../../components/button/button.component"
const AddLink = () => {
    const onSubmit = (value) => {
        console.log(value);
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
                            rules={[{ message: 'Please input URL!' }]}
                        >
                            <Input placeholder="https://example.com/long-url" />
                        </Form.Item>
                        <Form.Item
                            name="title"
                            label="Title"
                        >
                            <Input />
                        </Form.Item>
                        <LinkContainer>
                            <Form.Item label="Domain" style={{ width: '100%' }}>
                                <Input disabled value="sh.ly" />
                            </Form.Item>
                            <span style={{ margin: '0 10px' }}>/</span>
                            <Form.Item name="backhalf" label="Custom back-half (optional)" style={{ width: '100%' }} >
                                <Input />
                            </Form.Item>
                        </LinkContainer>
                        <Divider />
                        <Button type="primary">Add</Button>
                    </Form>
                </Box>
            </Container>
        </DashboardLayout>
    )
}
export default AddLink