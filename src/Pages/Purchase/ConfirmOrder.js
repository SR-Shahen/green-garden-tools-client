import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const ConfirmOrder = ({ tool }) => {
    const [user] = useAuthState(auth);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl text-primary font-medium">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <input type="text" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                <input type="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Enter you Address" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                <input type="text" value={tool.name} className="input input-bordered w-full max-w-xs" />
                <input type="number" value={tool.name} placeholder="Minimum order 100" className="input input-bordered w-full max-w-xs" />
                {/* <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}

                <button className='btn'>Order</button>
            </div>
        </div>
    );
};

export default ConfirmOrder;