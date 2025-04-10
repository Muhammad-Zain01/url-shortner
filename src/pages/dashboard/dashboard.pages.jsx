import DashboardLayout from "../../layout/DashboardLayout"
import DashboardCards from "../../components/usage-card/dashboard-card.component"
import { useEffect } from "react"
import { setPageTitle } from "../../utils/setPageTitle"

const Dashboard = () => {
    useEffect(() => {
        setPageTitle("Dashboard");
    }, []);
    
    return (
        <DashboardLayout>
            <DashboardCards />
        </DashboardLayout >
    )
}
export default Dashboard