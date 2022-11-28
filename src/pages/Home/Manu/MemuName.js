import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Lodaing from './../../../Shared/Lodaing';
import { useQuery } from '@tanstack/react-query';

import { data } from 'autoprefixer';

const MemuName = () => {
    // const  [data,setData]=useState([])
    
    // useEffect(()=>{
    //     fetch('http://localhost:5000/category')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))

    // },[])
    // if(lodading){
    //     return <Lodaing/>
    // }

    const {
        data:data,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await fetch('https://server-to-side.vercel.app/category');
          const data = await res.json();
          return data;
        },
      });

      if(isLoading){
        return <Lodaing></Lodaing>
      }
    return (
       
        <div>
            <div className=''>
                <div>
                    <ul className="flex flex-row gap-5 justify-center mb-10 mx-auto">
                    {
                        data.map(category => <li><Link 
                             to ={`/products/${category.category_id}`}className='p-4 text-xl btn btn-outline btn-warning  hover:bg-lightBlue-500 text-white rounded-lg button type1'>{category.category}</Link></li>)
                    }
                    </ul>

                </div>

               
            </div>
            </div>
            
            
        
      


    );
};

export default MemuName;
