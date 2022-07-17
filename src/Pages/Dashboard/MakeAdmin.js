import React from 'react';
import { toast } from 'react-toastify';

const MakeAdmin = ({ user, index, refetch }) => {
    const handelMakeAdmin = () => {
        fetch(``, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    toast.success('Successfully mad an Admin')
                }
                refetch()
                console.log(data);
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.role !== "admin" && <button onClick={handelMakeAdmin} className='btn btn-xs'>Make Admin</button>}</td>
        </tr>
    );
};

export default MakeAdmin;