import React from 'react';
type HeadingProps = {
    children: string
}

const Heading = (props: HeadingProps) => {
    return (
        <div>
            {/* <h1>{props.children}</h1> */}
            <h2>This is heading</h2>
        </div>
    );
};

export default Heading;