import { BarChartOutlined, HomeOutlined, LinkOutlined, SettingOutlined } from "@ant-design/icons"
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
    {
        key: 3,
        label: <Link to="/user/analytics">Analytics</Link>,
        icon: <BarChartOutlined />
    },
    {
        key: 4,
        label: <Link to="/user/settings">Settings</Link>,
        icon: <SettingOutlined />
    },
]