import DashboardLayout from "../../layout/DashboardLayout"
import LinkList from "../../components/link-list/link-list.component"
import { LinksContainer, LinksDiv } from "./links.style"
import { Typography, Divider } from "antd"
import { useEffect } from "react"
import { setPageTitle } from "../../utils/setPageTitle"

const Links = () => {
    useEffect(() => {
        setPageTitle("Your Links");
    }, []);
    
    return (
        <DashboardLayout>
            <LinksContainer>
                <LinksDiv>
                    <Typography.Title>
                        Links
                    </Typography.Title>
                    <Divider />
                    <LinkList />
                </LinksDiv>
            </LinksContainer>
        </DashboardLayout>
    )
}
export default Links