import React from 'react';

const TestBtn = (props) => {
    return(
        <button onClick={props.click}>U can also click here to get a random value (child component)</button>
    );
}

export default TestBtn;