import React, { useEffect, useState } from 'react';

const Products = () => {
    const  [data,setData]=useState([])
    console.log(data.category)
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setData(data))

    },[])
    return (
        <div>
            {
                data.map(d=><p className='text-5xl'>{d.category}</p>)
            }
        </div>
    );
};

export default Products;