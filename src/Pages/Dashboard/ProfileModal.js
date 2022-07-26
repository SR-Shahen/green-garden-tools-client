import React from 'react';

import { toast } from 'react-toastify';


const ProfileModal = ({ profile }) => {
    // const [user] = useAuthState(auth);
    const handelUpdateProfile = event => {
        event.preventDefault();
        // const user=event.target.user.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;
        const education = event.target.education.value;
        const profile = { name, email, address, phone, linkedin, education };
        fetch(`https://green-garden-tools.herokuapp.com/user/${profile.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                event.target.reset();
                if (data.modifiedCount > 0) {
                    toast('Your profile Update successful')
                }
            })
        console.log(profile);
    }
    return (
        <div>
            <input type="checkbox" id="profile-modal" className="modal-toggle" />
            <div className="modal">

                <div className="modal-box text-center">
                    <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form className='' onSubmit={handelUpdateProfile}>
                        <input type="text" name='name' disabled value={profile?.displayName} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={profile?.email} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Enter you Location" className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='education' placeholder='Educational Qualification' className="input my-2 input-bordered w-full max-w-xs" />
                        <input type='url' name='linkedin' placeholder="Add your linkedIn profile" className="input my-2 input-bordered w-full max-w-xs" />
                        {/* <label htmlFor="profile-modal" className="btn w-full max-w-xs">submit</label> */}
                        <input type="submit" className='btn my-2 input-bordered w-full max-w-xs' value="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;