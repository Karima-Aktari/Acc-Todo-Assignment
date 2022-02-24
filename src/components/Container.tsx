import React from 'react';
type ContainerProps = {
    name: string
    styles: React.CSSProperties
}

const Container = (props: ContainerProps) => {
    return (
        <div>
            <h1 style={{ border: '1px solid black' }}>Text Content {props.name}</h1>
            <h3 style={props.styles}>My name is {props.name}</h3>
        </div>
    );
};

export default Container;