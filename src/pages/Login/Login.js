import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const {  login } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    
    const handleLogin = data => {
        console.log(data)
        setLoginError('');
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login success')
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });


    }
    const handleGoogleLogin = () => {

    }
    return (
        <div className='h-[800px]  flex justify-center items-center'>
        <div className='w-96 p-7'>
            <h2 className='text-xl'>Login</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">email</span>
                    </label>
                    <input type="text" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"><span className="label-text">Password</span></label>
                    <input type="password" {...register("password", { required: 'Password is required', minLength: { value: 6, message: 'Password must be 6 character or longer' } })} className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    <label className="label"><button className="label-text">Forget Password</button></label>
                </div>

                <input className='btn btn-accent w-full' value='login' type="submit" />
                {
                    loginError && <p className='text-red-600'>{loginError}</p>}
            </form>
            <p>New to doctor Portal <Link className='text-primary' to='/register'>Create New Account</Link> </p>
            <div className="divider font-bold">LOGIN WITH SOCIAL MEDIA</div>
            <button onClick={handleGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
    </div>
    );
};

export default Login;