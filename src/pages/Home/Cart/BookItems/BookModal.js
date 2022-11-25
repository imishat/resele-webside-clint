import { data } from 'autoprefixer';
import { fromJSON } from 'postcss';
import React, { useContext } from 'react';
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../AuthProvider';

const BookModal = ({ modalData}) => {
    console.log(modalData)
    const {name,reseleprice,location}=modalData
        
    const {user}=useContext(AuthContext)
    const handleBooking =event=>{
        event.preventDefault();
        const form = event.target;
        const username = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price=form.price.value;
        const name=form.name.value;
        console.log(name,username,price,email,phone)
        const oder={
            productNmae:name,
            price,
            email,
            phone,
            username,


        }
        fetch('http://localhost:5000/oders',{
            method:"POST",
            headers:{

            },
            body:JSON.stringify(oder)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('ADD ODERS')
                form.resset()
            }
            else{
                toast.error('ADD AGIN')
            }
        })

    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{name}</h3>
                <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'> 
                    <input name="username" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                    <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="name" type="email" defaultValue={name} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="price" type="email" defaultValue={reseleprice} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="locatoin" type="email" defaultValue={location} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                    <br />
                    <input className='btn btn-accent w-full' type="submit" value="Submit" />
                </form>
            </div>
        </div>
    </> 
    );
};

export default BookModal;