import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider';

const MyOders = () => {
    const {user}=useContext(AuthContext)
    const url = `https://server-to-side.vercel.app/oders?email=${user?.email}`;
    
    const { data: oders = [],refetch } = useQuery({
        queryKey: ['oders', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    // authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    // delete

    const handleDelete = id =>{
        console.log(id)
        

        fetch(`https://server-to-side.vercel.app/oders${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("DELETE")
            refetch()
        })


                }
        
        
    
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>image</th>
                        <th>Name</th>
                       
                        <th>Location</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        oders.map((oder, i) => <tr className="active">
                            <th>{i + 1}</th>
                            <th>
                                <div className="avatar">
                                    <div className="w-16 rounded-full">
                                        <img src={oder?.img}/>
                                    </div>
                                </div>
                            </th>
                            <td>{oder?.productNmae}</td>
                            
                            <td>{oder?.location}</td>
                            <td>{oder?.reseleprice}</td>
                            <td className=''>
                        
                                 {
                                        oder.reseleprice && !oder.paid && <Link
                                            to={`/dashboard/payment/${oder._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        oder.reseleprice && oder.paid && <span className='text-green-500'>Paid</span>
                                    }
                                    
                                <Link>
                                <button className='btn btn-outline btn-error mx-2'onClick={() => handleDelete(oder._id)}>Delete</button>
                                </Link>
                            
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>

        
    );
};

export default MyOders;