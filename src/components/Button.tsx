import React from 'react';

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button onClick={(event) => props.handleClick(event, 5)}>click</button>
        </div>
    );
};

export default Button;