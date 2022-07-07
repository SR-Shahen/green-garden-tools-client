import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, price, description } = tool;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p><span className='text-lg font-medium'>Price:$ </span>{price}</p>
                <p><span className='text-lg font-medium'>Description:</span>{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary px-8 my-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;