import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from './../../AuthProvider';
import { toast } from 'react-toastify';

const Singup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const [signUpError, setSignUPError] = useState('');
  
    const{createUser, updateUser}=useContext(AuthContext)
    const handleSignUp = (data, event) => {

        const form = event.target;
        const select = form.select.value;
        console.log(select,data.email,data.name)


        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
              toast.success ('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,select);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

    }


    const saveUser = (name, email,select) =>{
        const user ={name, email,select};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
           
        })
    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: 'Please Enter Your Name' })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Choose Option</span>

                        </label>
                        <select name='select' className="select select-bordered">
                            <option>Buyers</option>
                            <option>Seller</option>

                        </select>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 character or longer' },
                            pattern: { value: /!@#$%^&*()_+"":{[]}``~~?||/, message: 'Password must be stronge' },
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        {/* <label className="label"><span className="label-text">Forget Password</span></label> */}
                    </div>

                    <input className='btn btn-accent w-full mt-4' value='login' type="submit" />
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                <p>Already haven an Account <Link className='text-red-600' to='/login'>Please login here</Link> </p>

            </div>
        </div>


    );
};

export default Singup;