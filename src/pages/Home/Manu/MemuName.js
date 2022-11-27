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
       
        <div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-6'>
                <div>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {
                        data.map(category => <li><Link 
                             to ={`/products/${category.category_id}`}className='border mb-2'>{category.category}</Link></li>)
                    }
                    </ul>

                </div>

               
            </div>
            </div>
            
            
        
      


    );
};

export default MemuName;
