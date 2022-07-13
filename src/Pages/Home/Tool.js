import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool }) => {
    const { name, img, price, description, _id } = tool;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p><span className='text-lg font-medium'>Price:$ </span>{price}</p>
                <p><span className='text-lg font-medium'>Description:</span>{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/purchase/${_id}`}><button className="btn btn-success w-36 text-white">Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Tool;