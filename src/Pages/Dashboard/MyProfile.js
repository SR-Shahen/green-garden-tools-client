import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ProfileModal from './ProfileModal';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
        if (user) {
            fetch(``)
                .then(res => res.json())
                .then(data => setProfile(data))
        }

    }, [user, profile])

    return (
        <div>
            <div className='font-medium text-lg grid grid-cols-1 gap-3 '>
                <h1 className='text-xl font-medium text-green-500'>Name: {profile?.name}</h1>
                <p>Location: {profile?.address}</p>
                <p>Education: {profile?.education}</p>
                <p>Phone Number:{profile?.phone}</p>
                <p>LinkedIn Profile:{profile?.linkedin}</p>

            </div>
            <label htmlFor="profile-modal" onClick={() => setProfile(user)} className=" btn btn-accent  text-white btn-sm m-3 p-2">Update Profile</label>

            {
                profile && <ProfileModal
                    profile={profile}
                ></ProfileModal>
            }
        </div>
    );
};

export default MyProfile;