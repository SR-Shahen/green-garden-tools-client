import { useEffect, useState } from 'react';

const useAdmin = user => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://green-garden-tools.herokuapp.com/admin/${user.email}`, {
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    setAdmin(data.admin)
                    console.log(data);
                })
        }
    }, [user])
    return [admin];
};

export default useAdmin;