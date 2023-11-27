
import { LogoWrapper, LogoImg } from "./logo.styles"
const Logo = ({ collapsed }) => {
    return (
        <LogoWrapper>
            <LogoImg src={collapsed ? "/icon.png" : "/logo.png"} width={collapsed ? 40 : 160} />
        </LogoWrapper>
    )
}

export default Logo;