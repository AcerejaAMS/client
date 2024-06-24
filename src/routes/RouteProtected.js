import { Navigate, Outlet } from "react-router-dom";
import { useAuthe } from "../context/AuthContext";

export const ProtectedRoute = () => {
    const {token} = useAuthe();
    console.log(token);
  
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/" replace/>;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };