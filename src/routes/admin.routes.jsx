import { Routes, Route, Navigate } from "react-router-dom"
import { useParams } from 'react-router-dom';
import Dashboard from "../pages/dashboard/dashboard.pages";
import Links from "../pages/links/links.pages";
import AddLink from "../pages/add-link/add-link.pages";
import Settings from "../pages/settings/settings.pages";
import useAuth from "../hook/useAuth";
import { useUser } from "../hook/useUser";
import { useEffect } from "react";
import { getUser } from "../API/API.request";
import usePrivateNavigate from "../hook/usePrivateNavigate";
import Verification from "../pages/verification/verification.pages";
const AdminRoutes = () => {
    const { setUser } = useUser();
    const { adminNavigate } = usePrivateNavigate();
    useEffect(() => {
        const fetchUserDetails = async () => {

            const response = await getUser()
            if (response?.status) {

                setUser({
                    username: response?.data?.username,
                    email: response?.data?.email,
                    displayName: response?.data?.displayName,
                    isVerified: !response?.data?.isVerified,
                })
                if (!response?.data?.isVerified) {
                    adminNavigate('verification');
                } else {
                    adminNavigate('dashboard');
                }
            }
        }
        fetchUserDetails()
    }, [])
    const { User } = useParams();
    const auth = useAuth()
    if (!auth) { return <Navigate to="/login" /> }
    if (auth.username != User) { return <Navigate to="/login" /> }
    return (
        <Routes>
            <Route path="/" element={<Navigate to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/link" element={<Links />} />
            <Route path="/link/add" element={<AddLink />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/verification" element={<Verification />} />
        </Routes>
    )
}

export default AdminRoutes;