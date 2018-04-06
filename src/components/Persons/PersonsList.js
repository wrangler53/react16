import React from 'react';
import Person from './Person/Person';

const PersonsList = props => {
    return (
       props.list.map((el, index) => {
            return (
                <Person
                    key={el.id}
                    name={el.name} 
                    age={el.age}
                    index={index} 
                    onDeleteUser={props.onDeleteUser}
                />
            )
        })
    );
}

export default PersonsList;
