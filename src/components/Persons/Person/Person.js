import React from 'react';
import './person.css'
import PropTypes from 'prop-types';


export default class Person extends React.Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside constructor')
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount')        
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount')        
    }

    componentWillUnmount() {
        console.log('[Person.js] Inside componentWillUnmount')                
    }

    render() {
        console.log('[Person.js] Inside render')        
        
        return(
            <div className="person">
                <div className="person__name">My name is: {this.props.name}</div>
                <div className="person__age">My age is: {this.props.age}</div>

                <button onClick={() => this.props.onDeleteUser(this.props.index)}>Click here to delete me</button>
            </div>
        )
    }
}

Person.propTypes = {
    name: PropTypes.string
}
