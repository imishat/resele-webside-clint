import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';
import useBuyers from './../hooks/useBuyers';
import Loading from '../Shared/Lodaing';

const BuyresRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const [isBuyers, isBuyersLoading] = useBuyers(user?.email);
    const location = useLocation();

    if (loading || isBuyersLoading) {
        return <Loading></Loading>
    }

    if (user && isBuyers) {
        return children;
    }

    return <Navigate to="/singup" state={{ from: location }} replace></Navigate>;
};

export default BuyresRoute;