import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-red-500 text-xs m-1'>{error.message}</p>
    }
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate('/')
    }
    const onSubmit = (data) => {
        createUserWithEmailAndPassword(data.email, data.password)
        console.log(data)
    };
    return (
        <div className='flex min-h-screen justify-center items-center '>
            <div className="card w-96   shadow-xl">
                <div className="card-body justify-center">
                    <h2 className=" text-center text-2xl font-medium ">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full max-w-xs"
                                {...register('name', {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please use valid email'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register('password', {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be al least 6 characters'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}

                            </label>
                        </div>
                        {errorMessage}
                        <input className='w-full max-w-xs btn' type="submit" value="Sign Up" />
                    </form>
                    <p className='mt-2'>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></p>
                    <div className="divider">OR</div>


                </div>
            </div>

        </div>
    );
};

export default SignUp;