import { Routes, Route, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard.pages";
import Links from "../pages/links/links.pages";
import AddLink from "../pages/add-link/add-link.pages";
import Settings from "../pages/settings/settings.pages";
import useAuth from "../hook/useAuth";
import { useUser } from "../hook/useUser";
import { useEffect, useState } from "react";
import { getUser } from "../API/API.request";
import usePrivateNavigate from "../hook/usePrivateNavigate";
import Verification from "../pages/verification/verification.pages";
import { useLocation } from "react-router-dom";
import { Spin } from "antd";
import Analytics from "../pages/analytics/analytics.pages";

const AdminRoutes = () => {
  const { setUser } = useUser();
  const { adminNavigate } = usePrivateNavigate();
  const { User } = useParams();
  const route = useLocation();
  const path = route.pathname.split("/");
  const pathname = path.slice(2).join("/");
  const [loading, setLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      const response = await getUser();
      if (response?.status) {
        const userIsVerified = response?.data?.isVerified;
        
        setUser({
          username: response?.data?.username,
          email: response?.data?.email,
          displayName: response?.data?.displayName,
          isVerified: !userIsVerified,
          code: response?.data?.verificationCode,
        });

        setIsVerified(userIsVerified);

        if (!userIsVerified) {
          // If user is not verified, redirect to verification page
          adminNavigate("verification");
        } else if (pathname === "verification") {
          // If user is verified but on verification page, redirect to dashboard
          adminNavigate("dashboard");
        }
      }
      setLoading(false);
    };
    fetchUserDetails();
  }, []);

  const auth = useAuth();
  if (!auth) {
    return <Navigate to="/login" />;
  }
  if (auth.username != User) {
    return <Navigate to="/login" />;
  }

  // Show loading spinner while checking verification status
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" tip="Loading..." />
      </div>
    );
  }

  // If user is not verified and not on verification page, don't render other routes
  if (!isVerified && pathname !== "verification") {
    return <Navigate to={`/${User}/verification`} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/link" element={<Links />} />
      <Route path="/link/add" element={<AddLink />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/verification" element={<Verification />} />
    </Routes>
  );
};

export default AdminRoutes;
