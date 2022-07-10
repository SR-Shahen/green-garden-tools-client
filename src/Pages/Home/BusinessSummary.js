import React from 'react';
import countries from '../../assets/icon/countries.jpg'
import feedback from '../../assets/icon/feedback.png'
import client from '../../assets/icon/client.png'
import project from '../../assets/icon/project.png'

const BusinessSummary = () => {
    return (
        <div className='my-10 px-5'>
            <h1 className='text-4xl text-accent font-medium text-center my-10'>Happy Clients With us</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className=" pt-2">
                        <img src={countries} alt="Shoes" className="w-40 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl text-cyan-600">47+</h2>
                        <p className='text-cyan-400 text-xl'>Countries</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className=" pt-5">
                        <img src={client} alt="Shoes" className="w-40 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl text-cyan-600">213+</h2>
                        <p className='text-cyan-400 text-xl'>Client</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className=" pt-5">
                        <img src={project} alt="Shoes" className="w-40 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-5xl text-cyan-600">317+</h2>
                        <p className='text-cyan-400 text-xl'>Compleat Projects</p>
                    </div>
                </div>
                <div className="card w-80 bg-base-100 shadow-xl">
                    <figure className=" pt-10">
                        <img src={feedback} alt="Shoes" className="w-40 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center mt-5">
                        <h2 className="card-title text-5xl text-cyan-600">350+</h2>
                        <p className='text-cyan-400 text-xl'>feedback</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;