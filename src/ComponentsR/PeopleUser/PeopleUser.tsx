import React, { useState } from 'react';
import AddTOList from './AddTOList';
import List from './List';

export interface IState {
    people: {
        name: string
        age: number
        url: string
        note: string
    }[]
}

const PeopleUser = () => {
    const [peoples, setPeoples] = useState<IState["people"]>([
        {
            name: "Jamil",
            url: "https://png.pngtree.com/thumb_back/fh260/background/20201231/pngtree-path-between-red-maple-trees-image_518382.jpg",
            age: 65,
            note: "I am ok",
        },
        {
            name: "Kamil",
            url: "https://png.pngtree.com/thumb_back/fh260/background/20201231/pngtree-path-between-red-maple-trees-image_518382.jpg",
            age: 55,
            note: "I am ok",
        },
        {
            name: "Kalim",
            url: "https://png.pngtree.com/thumb_back/fh260/background/20201231/pngtree-path-between-red-maple-trees-image_518382.jpg",
            age: 45,
            note: "I am ok",
        },
    ])

    return (
        <div>
            <List people={peoples} />
            <AddTOList peoples={peoples} setPeoples={setPeoples} />
        </div>
    );
};

export default PeopleUser;