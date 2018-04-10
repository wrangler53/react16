import React from 'react';
import Person from './Person/Person';

export default class PersonsList extends React.Component {
    
    constructor(props) {
        super(props);
        console.log('[PersonsList.js] Inside constructor')
    }

    componentWillMount() {
        console.log('[PersonsList.js] Inside componentWillMount')        
    }

    componentDidMount() {
        console.log('[PersonsList.js] Inside componentDidMount')        
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE PersonsList.js] Inside componentWillReceiveProps', nextProps)                
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE PersonsList.js] Inside shouldComponentUpdate', nextProps, nextState)                        
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE PersonsList.js] Inside componentWillUpdate', nextProps, nextState)                        
    }

    componentDidUpdate() {
        console.log('[UPDATE PersonsList.js] Inside componentDidUpdate')                                
    }
    
    render() {
        console.log('[PersonsList.js] Inside render')        
        
        return(
            this.props.list.map((el, index) => {
                return (
                    <Person
                        key={el.id}
                        name={el.name} 
                        age={el.age}
                        index={index} 
                        onDeleteUser={this.props.onDeleteUser}
                    />
                )
            })
        )
    }         
}
