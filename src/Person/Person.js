import React from 'react';
import './person.css'
import PropTypes from 'prop-types';

const Person = (props) => {
    return (
        <div className="person">
            <div className="person__name">My name is: {props.name}</div>
            <div className="person__age">My age is: {props.age}</div>

            <button onClick={props.delete}>Click here to delete me</button>
        </div>
    );
}

Person.propTypes = {
    name: PropTypes.string
}

export default Person;