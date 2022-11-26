import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';

const Addproducts = () => {
    const {user}=useContext(AuthContext)
    return (
        <div className='w-1/2 mx-auto'>
        <h3 className='text-center text-2xl font-bold mb-5'>ADD Your Product</h3>
        <form className='grid grid-cols-1 gap-3 mb-5'>
            <div className="form-control w-full ">
                <label className="label">User Name<span className="label-text"></span></label>
                <input name='name' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">User Email</span></label>
                <input name='name' type="text" defaultValue={user?.email} disabled className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">Products name</span></label>
                <input name='name' type="text" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">Add image</span></label>
                <input type="file" className="file-input file-input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">Category</span></label>
                <input name='catagory' type="text" className="input input-bordered w-full" placeholder='first letter uppercase'/>
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">Condition</span></label>
                <input name='Condition' type="text" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">price</span></label>
                <input name='price' type="text" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">Location</span></label>
                <input name='location' type="text" className="input input-bordered w-full" />
            </div>
            <div className="form-control w-full ">
                <label className="label"><span className="label-text">Phone Number</span></label>
                <input name='number' type="text" className="input input-bordered w-full" />
            </div>



            <input className="btn btn-accent w-full" type="submit" value='submit' />
        </form>
    </div>
    );
};

export default Addproducts;