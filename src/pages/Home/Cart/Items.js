import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider';

const Items = ({items,setModalData}) => {
     const{img,name,reseleprice,selername,originalprice,location,use}=items
     const {user}=useContext(AuthContext)
    return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//   <figure className="px-10 pt-10">
//     <img src={img} alt="Shoes" className="rounded-xl" />
//   </figure>
//   <div className="card-body items-center text-center">
//     <h2 className="card-title">{name}</h2>
//     <div className=''>
//                     <p className='font-bold'>Price: {originalprice}

//                       </p>
//                     <p className='font-bold'>ReSale Price: {reseleprice}
//                         <div className="badge badge-secondary">NEW</div></p>
//                         <p>Location{location}</p>
//                 <p>Used:{use}</p>
//                 </div>
                
//                <div className="card-actions">
                //  <label
                        
                //         htmlFor="oders-modal"
                //         className="btn btn-primary text-white"
                //         onClick={() =>setModalData (items)}
                //     >Book</label>
//     </div>
//   </div>
// </div>
<div className="card card-compact shadow-xl">
            <div className='img-container'>
                <figure><img src={img} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className='flex flex-row gap-4'>
                    <p className='font-bold bg-primary rounded px-4'>Price: {originalprice}</p>
                    <p className='font-bold bg-pink-700 rounded'>ReSale Price: {reseleprice}
                        <div className="badge badge-secondary">NEW</div></p>
                </div>
                <p><span className='font-bold'>Location</span> {location}</p>
                <p><span className='font-bold'>Description:</span> {'title'}</p>
                <div className="card-actions justify-between mt-4">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                        <div className='mx-4'>
                            <h1 className='font-bold'>{user.displayName}</h1>
                            <p>Seller</p>
                        </div>
                    </div>

                    {/* <label htmlFor="my-modal" className="btn" onClick={() => setBuyNow(service)}>Booking</label> */}
                    <label
                        
                        htmlFor="oders-modal"
                        className="btn btn-primary text-white"
                        onClick={() =>setModalData (items)}
                    >Book</label>
                    

                </div>
            </div>
        </div>


    );
};

export default Items;