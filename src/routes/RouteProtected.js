import { Navigate, Outlet } from "react-router-dom";
import { useAuthe } from "../context/AuthContext";

export const ProtectedRoute = () => {
    const { token } = useAuthe();
  
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };