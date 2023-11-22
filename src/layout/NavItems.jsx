import { BarChartOutlined, HomeOutlined, LinkOutlined, SettingOutlined } from "@ant-design/icons"
import AdminLink from "../components/admin-link/admin-link"
export const SideItems = [
    {
        key: 1,
        label: <AdminLink to={`/dashboard`}>Dashboard</AdminLink>,
        icon: <HomeOutlined />
    },
    {
        key: 2,
        label: <AdminLink to={`/link`}>Link</AdminLink>,
        icon: <LinkOutlined />
    },
    {
        key: 4,
        label: <AdminLink to={`/settings`}>Settings</AdminLink>,
        icon: <SettingOutlined />
    },
]