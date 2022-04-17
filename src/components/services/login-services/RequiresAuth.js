import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";


export default function RequiresAuth({children}){
    let location = useLocation();
    const {auth} = useAuth();
    const {authStatus} = auth;
    return authStatus ? (
        children
    ) : (
        <Navigate to="/login" state={{from : location }} replace />
    )
}