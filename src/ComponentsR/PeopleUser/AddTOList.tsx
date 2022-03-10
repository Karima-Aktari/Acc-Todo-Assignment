import React, { useState } from 'react';
import { IState as Props } from "./PeopleUser";

interface IProps {
    peoples: Props["people"]
    setPeoples: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddTOList: React.FC<IProps> = ({ peoples, setPeoples }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name ||
            !input.age ||
            !input.img
        ) {
            return
        }
        setPeoples([
            ...peoples,

            {
                name: input.name,
                age: parseInt(input.age),
                url: input.img,
                note: input.note,
            }
        ])
        console.log(peoples)
    }

    return (
        <div className='AddToList'>
            <input
                type="text" placeholder="Name" className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name" />

            <input
                type="number" placeholder="Age" className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age" />
            <input
                type="text" placeholder="Image-Url" className="AddToList-input"
                value={input.img}
                onChange={handleChange}
                name="img" />

            <textarea
                placeholder="Notes" className="AddToList-input"
                value={input.note}
                onChange={handleChange}
                name="note" />

            <button onClick={handleClick} type="button">
                Submit
            </button>
        </div>
    );
};

export default AddTOList;