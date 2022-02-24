import React from 'react';
import { personInfo } from './Person.Info';


const Person = (props: personInfo) => {

    return (
        <div>
            <h1>{props.name.first} {props.name.last} is no.1 !</h1>
        </div>
    );
};

export default Person;