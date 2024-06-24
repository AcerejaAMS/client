import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({token}) => {
  
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };