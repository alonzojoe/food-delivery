import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("AUTH_USER");

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
