import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContext);``
    const location = useLocation();
    // console.log(loader);
    
    if(loader){
        return <span className="loading loading-spinner w-64"></span>
    }
    
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoutes;