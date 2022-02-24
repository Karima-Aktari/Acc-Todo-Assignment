import React from 'react';
import Person from './Person';
import PersonList from './PersonList';

type GreetInfo = {
    name: string;
    count?: number;
    isLoggedIn: boolean;
}

const Greet = (props: GreetInfo) => {
    const personName = {
        first: 'Karima',
        last: 'Aktari',
    }
    const nameList = [
        {
            first: 'Karima',
            last: 'Aktari',
        },
        {
            first: 'Karima',
            last: 'Aktari',
        },
        {
            first: 'Karima',
            last: 'Aktari',
        },
        {
            first: 'Karima',
            last: 'Aktari',
        },
        {
            first: 'Karima',
            last: 'Aktari',
        },
    ]

    const { count = 0 } = props

    return (
        <div>
            <h2>
                {props.isLoggedIn ? `Welcome ${props.name}! You have ${count} unread massages ` : 'Welcome Guest'
                }
            </h2>
            <Person name={personName}></Person>
            <PersonList names={nameList} />
        </div>
    );
};

export default Greet;