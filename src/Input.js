import React from 'react';
import './Input.css'

const Input = (props) => {
    return(
        <React.Fragment>
            <label htmlFor="newName">{props.name}</label>
            <input type="text" 
                   name="newName" 
                   onChange={props.newValue}
                   className="input" 
                   defaultValue={props.value}/>
        </React.Fragment>
    );
}

export default Input;