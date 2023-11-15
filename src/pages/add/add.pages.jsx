import DashboardLayout from "../../layout/DashboardLayout"
import { AddContainer, AddDiv, InputStyle, Inputlabel, SpanStyle, DividerStyle } from "./add.style"
import { Typography, Divider, Form } from "antd"

const Add = () => {
    const onSubmit = (value) => {
        
    }
    return (
        <DashboardLayout>
            <AddContainer>
                <AddDiv>
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
                            label="Destination"
                            rules={[{ message: 'Please input URL!' }]}
                        >
                            <InputStyle placeholder="https://example.com/my-long-url" />
                        </Form.Item>
                        <Form.Item
                            name="title"
                            label="Title"
                        >
                            <InputStyle />
                        </Form.Item>
                    </Form>
                    <DividerStyle />
                </AddDiv>
            </AddContainer>
        </DashboardLayout>
    )
}
export default Add