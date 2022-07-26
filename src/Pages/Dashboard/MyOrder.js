

import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import DeleteModal from './DeleteModal';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [remove, setRemove] = useState(null);
    useEffect(() => {
        if (user) {
            fetch(`https://green-garden-tools.herokuapp.com/order?customer=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user, orders])
    return (
        <div>
            <h1 className=' text-cyan-500 my-2 ' >Your total order: {orders.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Email</th>
                            <th>Name</th>
                            <th>Tool</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* * <!-- row 1 -->  */}

                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user?.email}</td>
                                <td>{user?.displayName}</td>
                                <td>{order.tool}</td>
                                <td><button className="btn btn-accent btn-xs">pay</button></td>
                                <td><label htmlFor="delete-modal" onClick={() => setRemove(order)} className="modal-button btn btn-error text-white btn-xs">Delete Order</label> </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                remove && <DeleteModal remove={remove}></DeleteModal>
            }
        </div>
    );
};

export default MyOrder