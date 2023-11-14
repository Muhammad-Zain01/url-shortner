import { Routes, Route,Redirect, Navigate } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout";
const DashboardRoute = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<Navigate to="error-page" />} />
                <Route path="/dashboard" element={<div>Test</div>} />
            </Routes>
        </>
    )
}

export default DashboardRoute;