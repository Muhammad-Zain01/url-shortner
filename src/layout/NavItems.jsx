import { HomeOutlined, LinkOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
export const HeaderItems = [
    {
        key: 1,
        label: "Test",
    }
]

export const SideItems = [
    {
        key: 1,
        label: <Link to="/user/dashboard">Dashboard</Link>,
        icon: <HomeOutlined />
    },
    {
        key: 2,
        label: <Link to="/user/link">Link</Link>,
        icon: <LinkOutlined />
    },
]