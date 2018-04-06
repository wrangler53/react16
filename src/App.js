import React from 'react';
import Test from './Test';
import Input from './Input';
import HelloWorld from './HelloWorld/HelloWorld';

import Person from './Person/Person.js';
import './Person/person.css';

class App extends React.Component {
  
  state = {
    inputValue: 0,
    showBlock: false,
    persons: [{
      id: 0,
      name: 'Tom',
      age: 22
    },
    {
      id: 1,
      name: 'Denis',
      age: 33
    },
    {
      id: 2,
      name: 'Angie',
      age: 26
    }]
  }

  getRandom = () => Math.floor(Math.random() * 100);

  getInputValue = (e) => e.target.value;

  updateValue = (value) => {
    this.setState({
      inputValue: value
    })
  }

  toggleBlock = () => {
    this.setState({
      showBlock: !this.state.showBlock
    })
  }

  updateName = (value) => {
    this.setState({
      persons: [{
        id: 0,
        name: value,
        age: 22
      },
      {
        id: 1,
        name: 'Denis',
        age: 33
      },
      {
        id: 2,
        name: 'Angie',
        age: 26
      }]
    })
  }

  deleteUser = (index) => {
    let newPersonsArr = [...this.state.persons];
    newPersonsArr.splice(index, 1);

    this.setState({
      persons: newPersonsArr
    })
  }
  
  render() {

    const btnStyle = {
      backgroundColor: 'green',
      color: 'black'
    }

    let mainBlock = null;


    if(this.state.showBlock) {
      mainBlock = 
        <div className="mainBlock">
        <h1>Play with buttons</h1>

        <button onClick={() => this.updateValue(this.getRandom())}>Click me to get a random value (basic way)</button>
        
        <p>Your random value is: <span>{this.state.inputValue}</span></p>

        <Test click={() => this.updateValue(this.getRandom())}/>

        <h1>Play with inputs</h1>
        
        <Input newValue={(e) => this.updateValue(this.getInputValue(e))}
               name={'Enter a new number'} />
      </div>

      btnStyle.backgroundColor = 'red'
    }

    let classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('redPersons')
    } if(this.state.persons.length <= 1) {
      classes.push('boldPersons')
    }

    return(
      <React.Fragment>
          <HelloWorld />
          <h1>Show/hide block</h1>
          
          <button onClick={this.toggleBlock}
                  style={btnStyle}>Click me to hide/show all above</button>

          {mainBlock}

          <h1 className={classes.join(' ')}>Persons block</h1>
        
          {
            this.state.persons.map((el, index) => {
              return (
                <Person key={el.id}
                        name={el.name} 
                        age={el.age} 
                        delete={() => this.deleteUser(index)}/>
              )
            })
          }

          <Input newValue={(e) => this.updateName(this.getInputValue(e))} 
                value={this.state.persons[0].name}
                name={'Enter a new name'}/>

      </React.Fragment>
    );
  }
}

export default App;