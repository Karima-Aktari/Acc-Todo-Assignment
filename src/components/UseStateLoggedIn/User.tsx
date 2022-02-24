import React, { useState } from 'react';

type UserAuth = {
    name: string
    email: string
}

const User = () => {
    const [user, setUser] = useState<UserAuth | null>(null)
    // const [user, setUser] = useState<UserAuth>({} as UserAuth)

    const handleLogin = () => {
        setUser({
            name: 'Aktari',
            email: 'aktarikarima@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name {user?.name} </div>
            <div>User Email {user?.email} </div>
        </div>
    );
};

export default User;