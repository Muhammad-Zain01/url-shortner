import { Routes, Route, Navigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import Dashboard from "../pages/dashboard/dashboard.component";
import Links from "../pages/links/links.component";
const AdminRoutes = () => {
    const { User } = useParams();
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/link" element={<Links />} />
            <Route path="/analytics" element={<Links />} />
        </Routes>
    )
}

export default AdminRoutes;