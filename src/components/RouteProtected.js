import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    canActivate
}) =>{
    if(!canActivate){
        return <Navigate to={"/"} replace/>
    }

    return <Outlet/>
}

export default ProtectedRoute;