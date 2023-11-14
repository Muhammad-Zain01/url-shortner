import { Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../components/dashboard/dashboard.component";
const DashboardRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<DashboardLayout><div>Dashboard</div></DashboardLayout>} />
            <Route path="/link" element={<DashboardLayout><div>Links</div></DashboardLayout>} />
        </Routes>
    )
}

export default DashboardRoute;