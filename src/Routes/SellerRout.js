import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useSeller from './../hooks/useSeller';
import Loading from '../Shared/Lodaing';

const SellerRout = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }

    if (user && isSeller) {
        return children;
    }

    return <Navigate to="/singup" state={{ from: location }} replace></Navigate>;
};

export default SellerRout;