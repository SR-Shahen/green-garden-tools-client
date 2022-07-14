import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const handelAddReview = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const rating = event.target.rating.value;
        const photoUrl = event.target.photoUrl.value;
        const location = event.target.location.value;
        const description = event.target.description.value;
        const review = { name, rating, description, location, photoUrl };
        console.log(review);
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Thanks for your Review")
                event.target.reset();
            })

    }
    return (
        <div className='flex justify-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl text-cyan-500 font-semibold">Please Give your review</h2>
                    {/* <p>{tool.description}</p> */}
                    <form onSubmit={handelAddReview}>
                        <input type="text" name='name' disabled value={user?.displayName} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='rating' placeholder="review rating" className="input my-2 input-bordered w-full max-w-xs" />
                        {/* <input type="file" name='photoUrl' placeholder="url link" className="input my-2 input-bordered w-full max-w-xs" /> */}
                        <input type="url" name='photoUrl' placeholder="url link" className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='location' placeholder="Enter your location" className="input my-2 input-bordered w-full max-w-xs" />
                        <textarea name='description' className="textarea textarea-bordered w-full max-w-xs" placeholder="Review"></textarea>
                        <input type="submit" value="Review" className=" btn my-2 input-bordered w-full max-w-xs" />
                        {/* <input type="file" name="file" id="" /> */}
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddReview;