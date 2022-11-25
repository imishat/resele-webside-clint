import React from 'react';

const Items = ({items,setModalData}) => {
     const{img,name,reseleprice,selername,originalprice


     }=items
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
    <label
                        
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() =>setModalData (items)}
                    >Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default Items;