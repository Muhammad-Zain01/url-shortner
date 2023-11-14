import { Routes, Route, Navigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import Dashboard from "../pages/dashboard/dashboard.pages";
import Links from "../pages/links/links.pages";
import Analytics from "../pages/analytics/analytics.pages";
import Settings from "../pages/settings/settings.pages";
const AdminRoutes = () => {
    const { User } = useParams();
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/link" element={<Links />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    )
}

export default AdminRoutes;