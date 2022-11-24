import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import Lodaing from '../Shared/Lodaing';

const PrivetRouts = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <Lodaing></Lodaing>
    }

    if (user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};
    


export default PrivetRouts;