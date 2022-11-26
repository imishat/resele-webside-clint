import React from 'react';

const Items = ({items,setModalData}) => {
     const{img,name,reseleprice,selername,originalprice,location,use}=items
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <div className=''>
                    <p className='font-bold'>Price: {originalprice}

                      </p>
                    <p className='font-bold'>ReSale Price: {reseleprice}
                        <div className="badge badge-secondary">NEW</div></p>
                        <p>Location{location}</p>
                <p>Used:{use}</p>
                </div>
                
               <div className="card-actions">
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