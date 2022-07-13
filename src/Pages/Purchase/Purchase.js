import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);
    console.log(user);
    const [tool, setTool] = useState({});
    let errorMessage;
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:5000/tool/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id])
    const confirmOrdered = event => {
        event.preventDefault();
        const user = event.target.user.value;
        const customer = event.target.customer.value;
        const phone = event.target.phone.value;
        const order = event.target.order.value;
        const tool = event.target.tool.value;
        const address = event.target.address.value;
        if (order < 10 || order > 50) {
            return errorMessage = <p>minimum order at least 10 products</p>

        }
        const data = { user, customer, tool, address, phone, order }
        console.log(data);
        fetch('https://radiant-shelf-47828.herokuapp.com/order', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Congratulations thanks for your order')
            })
        navigate('/dashboard/myOrder')
    }
    return (
        <div className='flex justify-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl text-primary font-bold">{tool.name}</h2>
                    <p>{tool.description}</p>
                    <p>Available: {tool.available}</p>
                    <form onSubmit={confirmOrdered}>
                        <input type="text" name='user' disabled value={user?.displayName} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="email" name='customer' disabled value={user?.email} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='address' placeholder="Enter you Address" className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="text" name='tool' disabled value={tool.name} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="number" disabled value={tool.available} className="input my-2 input-bordered w-full max-w-xs" />
                        <input type="number" name='order' placeholder="Minimum order 10" className="input my-2 input-bordered w-full max-w-xs" />
                        {errorMessage}
                        {errorMessage ? <input disabled type="submit" className='btn my-2 w-full max-w-xs' value="purchase" /> : <input type="submit" className='btn my-2 w-full max-w-xs' value="purchase" />}
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Purchase;