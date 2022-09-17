import { useEffect, useState } from "react"

const useUsers = () => {
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] =  useState([]);

    useEffect(() => {
        if (isLoading) {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users));
            console.log('loading users...');
        }
    }, [isLoading]);

    useEffect(() => {
        if (users) {
            console.log("is done loading...")
            setLoading(false);
        }
    }, [users]);

    return { users: users, isLoading: isLoading};
}

export default useUsers;