import DashboardLayout from "../../layout/DashboardLayout"
import { AddContainer, AddDiv, InputStyle, Inputlabel, SpanStyle, DividerStyle } from "./add.style"
import { Typography, Divider, Form } from "antd"

const Add = () => {
    return (
        <DashboardLayout>
            <AddContainer>
                <AddDiv>
                    <Typography.Title>
                        Create new
                    </Typography.Title>
                    <Inputlabel>
                        Destination
                    </Inputlabel>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                    //onFinish={onSubmit}
                    >
                        <Form.Item
                            name="url"
                            rules={[{ required: true, message: 'Please input URL!' }]}
                        >
                            <InputStyle placeholder="https://example.com/my-long-url" />
                        </Form.Item>
                        <Inputlabel>
                            Title <SpanStyle>(optional)</SpanStyle>
                        </Inputlabel>
                        <Form.Item
                            name="title"
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