import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function PublicRoute() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("PublicRoute:", isAuthenticated);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
}

export default PublicRoute;
