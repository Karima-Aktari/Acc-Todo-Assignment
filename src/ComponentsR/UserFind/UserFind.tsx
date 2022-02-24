import React from 'react';
import { useState } from 'react';

const UserFind: React.FunctionComponent = () => {
    const users = [

        {
            name: 'Shahjalal vai',
            age: 14,
            designation: 'Fullstack developer',
        },
        {
            name: 'Fathe Karim',
            age: 12,
            designation: 'Fullstack developer',
        },
        {
            name: 'Tanzim',
            age: 13,
            designation: 'Software developer',
        },
        {
            name: 'Muntasim',
            age: 10,
            designation: 'Software developer',
        },
        {
            name: 'Shahara Banu',
            age: 15,
            designation: 'Backend developer',
        },
        // {
        //     name: 'Habibur Rahman',
        //     age: 17,
        //     designation: 'Strong Man',
        // },
        {
            name: 'Karima Aktari',
            age: 16,
            designation: 'Web developer',
        },
    ];

    // type userTypes ={
    //     name: string 
    //     age: number 
    //     designation: string
    // }

    const [userList, setUserList] = useState<{ name: string; age: number; designation: string }[] | undefined>(users);
    const [text, setText] = useState<string>('');

    const handleOnClick = () => {
        const findUser = userList && userList.length > 0 ? userList?.filter(u => u?.name === text) : undefined
        setUserList(findUser);
        console.log(findUser);
        // setText('');
    }

    return (
        <div>
            <div className='title'>
                <h1>User Find Component</h1>
            </div>
            <div className='input_wrapper'>
                <input type='text'
                    placeholder="Search User"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                        setUserList(users)
                    }} />

                <button disabled={!text} onClick={handleOnClick} >Search</button>
            </div>
            <div className="body">
                {
                    userList && userList?.length === 0 && (
                        <div className="notFound"> No User Found </div>
                    )
                }

                {userList && userList?.length > 0 && userList?.map(user =>
                (
                    <div className="body_item" key={user.age}>
                        <h3>Name: {user?.name}</h3>
                        <p>Age: {user?.age}</p>
                        <p>Designation: {user?.designation}</p>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default UserFind;