import React from 'react';

type StatusProps = {
    status: string
}

const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = 'Loading...'
    }
    else if (props.status === 'success') {
        message = 'Data fetch successfully'
    }
    else if (props.status === 'error') {
        message = 'Error fetching data'
    }

    return (
        <div>
            <h2>Loading... {message} </h2>
            {/* <h3>Data fetched successfully</h3>
            <h3>Error fetching data</h3> */}
        </div>
    );
};

export default Status;