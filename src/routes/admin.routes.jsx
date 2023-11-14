import { Routes, Route, Navigate } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/dashboard.component";
import Links from "../pages/links/links.component";
const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/link" element={<Links />} />
        </Routes>
    )
}

export default AdminRoutes;