import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import ViewProduct from './ViewProduct';

const MyProducts = () => {
    const {user}=useContext(AuthContext)
    const url = `https://server-to-side.vercel.app/products?email=${user?.email}`;
    const { data:products  = [],refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-20'>
            {
                products.map(product => <ViewProduct key={product._id} product={product}
                    refetch={refetch}
                
                
                ></ViewProduct>)
            }
        </div>

    );
};

export default MyProducts;