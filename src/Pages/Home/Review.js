import React from 'react';

const Review = ({ review }) => {
    const { name, description, location, photoUrl } = review;
    return (
        <div className="card w-96  shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className="flex items-center mt-9">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src={photoUrl} alt="" />
                        </div>
                    </div>
                    <div className='pl-5'>
                        <h1 className='text-xl font-medium'>{name}</h1>
                        <p>{location}</p>
                        {/* <p>{_id}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;