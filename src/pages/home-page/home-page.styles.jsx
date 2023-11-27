import styled from "styled-components";
import { Button } from "../../components/button/button.component";
import { Layout } from "antd";
const { Content } = Layout;

export const NavBarContainer = styled.div`
    padding: 10px 30px;
`
export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoBox = styled.div`
    display: flex;
    justify-content: start;
`
export const NavButtons = styled.div`
    display: flex;
`
export const NavButton = styled(Button)`
    padding: 0px 30px;
`

export const ContentContainer = styled(Content)`
    padding: 0px 50px;
`
export const ContentBox = styled.div`
    display: flex;
    height: 90%;
    justify-content: space-between;
    align-items: center;
`