import React from 'react';

const ViewProduct = ({product}) => {
    console.log(product)
    const {img,resaleprice
        ,originalPrice,location,condition,description,selername,use}=product
    return (
        
        <div className="card card-compact shadow-xl">
            <div className='img-container'>
                <figure><img className='h-52' src={img} alt="Shoes" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">name</h2>
                <div className='flex flex-row'>
                    <p className='font-bold'>Price: {originalPrice}</p>
                    <p className='font-bold'>ReSale Price: {resaleprice
}
                        <div className="badge badge-secondary">NEW</div></p>
                </div>
                <p>Description: {description}</p>
                <p>Condition: {condition}</p>
                <p>UserName: {selername}</p>
                <p>Using Time: {use}</p>
                <p>location: {location}</p>


                <div className="card-actions justify-around">
                    <button className='btn btn-primary'>Advices</button>
                    <button className='btn btn-primary'>DELETE</button>

                    {/* <label htmlFor="my-modal" className="btn" onClick={() => setBuyNow(service)}>Booking</label> */}

                </div>
            </div>
        </div>
    );
};

export default ViewProduct;