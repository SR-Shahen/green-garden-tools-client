import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (loading) {
        <Loading></Loading>
    }
    if (user) {
        navigate('/dashboard')
    }
    const handelGoogleSignin = () => {
        signInWithGoogle();
    }
    return (
        <div className='flex justify-center'>
            <button onClick={handelGoogleSignin} className="btn w-full btn-primary">Continue with Google</button>
        </div>
    );
};

export default SocialLogin;