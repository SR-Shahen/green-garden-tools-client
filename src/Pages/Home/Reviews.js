import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://green-garden-tools.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // const says = [
    //     {
    //         _id: 1,
    //         description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    //         img: people1,
    //         name: "Jemi Sidons",
    //         location: "New york"
    //     },
    //     {
    //         _id: 2,
    //         description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    //         img: people2,
    //         name: "Pankha Mofiz",
    //         location: "Godagari"
    //     },
    //     {
    //         _id: 3,
    //         description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
    //         img: people3,
    //         name: "Pankha Mofiz",
    //         location: "Godagari"
    //     }
    // ];
    return (
        <section className='pt-10 '>
            <div className='mt-14'>
                <h1 className='text-4xl font-bold text-center'>What Our Customers Says</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 my-9'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;