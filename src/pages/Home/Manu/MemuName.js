import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MemuName = () => {
    const  [data,setData]=useState([])
    
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Content */}


                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                    {
                        data.map(category => <li><Link 
                             to ={`/products/${category.category_id}`}className='border mb-2'>{category.category}</Link></li>)
                    }
                    
                    

                    

                    
                </ul>

            </div>
        </div>


    );
};

export default MemuName;
