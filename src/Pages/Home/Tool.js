import React from 'react';

const Tool = ({ tool }) => {
    const { name, img, price, description } = tool;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Name: {name}</h2>
                <p><span className='text-lg font-medium'>Price:$ </span>{price}</p>
                <p><span className='text-lg font-medium'>Description:</span>{description}</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-primary px-8 my-2">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;