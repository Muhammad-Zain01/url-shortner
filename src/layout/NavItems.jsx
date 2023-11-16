import { BarChartOutlined, HomeOutlined, LinkOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import useSession from "../hook/useSession"
export const HeaderItems = [
    {
        key: 1,
        label: "Test",
    }
]
let session = useSession().get('user')
session = session != null && JSON.parse(session)

export const SideItems = [
    {
        key: 1,
        label: <Link to={`/${session.username}/dashboard`}>Dashboard</Link>,
        icon: <HomeOutlined />
    },
    {
        key: 2,
        label: <Link to={`/${session.username}/link`}>Link</Link>,
        icon: <LinkOutlined />
    },
    {
        key: 3,
        label: <Link to={`/${session.username}/analytics`}>Analytics</Link>,
        icon: <BarChartOutlined />
    },
    {
        key: 4,
        label: <Link to={`/${session.username}/settings`}>Settings</Link>,
        icon: <SettingOutlined />
    },
]