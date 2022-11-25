import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from './BookItems/BookModal';
import Items from './Items';

const Cart = () => {
    const cart=useLoaderData()
    const [modalData,setModalData]=useState(null)
    console.log(cart)
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
          {
            cart.map(c=><Items key={c._id} items={c}
              setModalData={setModalData} ></Items>)
          }
          <div>
            <BookModal
            modalData={modalData}></BookModal>
          </div>
        </div>
    );
};

export default Cart;