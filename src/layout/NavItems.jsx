import { 
    DashboardOutlined, 
    LinkOutlined, 
    SettingOutlined, 
    BarChartOutlined
} from "@ant-design/icons"
import AdminLink from "../components/admin-link/admin-link"

const NavItems = [
    {
        key: 1,
        label: <AdminLink to={`/dashboard`}>Dashboard</AdminLink>,
        icon: <DashboardOutlined />,
        title: 'Dashboard'
    },
    {
        key: 2,
        label: <AdminLink to={`/link`}>Links</AdminLink>,
        icon: <LinkOutlined />,
        title: 'Links'
    },
    {
        key: 3,
        label: <AdminLink to={`/analytics`}>Analytics</AdminLink>,
        icon: <BarChartOutlined />,
        title: 'Analytics'
    },
    {
        key: 4,
        label: <AdminLink to={`/settings`}>Settings</AdminLink>,
        icon: <SettingOutlined />,
        title: 'Settings'
    }
]

export default NavItems