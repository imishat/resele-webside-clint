import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Items from './Items';

const Cart = () => {
    const cart=useLoaderData()
    console.log(cart)
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {
            cart.map(c=><Items key={c._id} items={c}></Items>)
          }
        </div>
    );
};

export default Cart;