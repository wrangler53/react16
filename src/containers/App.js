import React from 'react';
import TestBtn from '../components/TestBtn/TestBtn';
import Input from '../components/Input/Input';
import HelloWorld from '../components/HelloWorld/HelloWorld';

import PersonsList from '../components/Persons/PersonsList';
import '../components/Persons/Person/person.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor', props)
    
    this.state = {
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
  
  }

  componentWillMount() {
    console.log('[App.js] inside componentWillMount')    
  }

  componentDidMount() {
    console.log('[App.js] inside componentDidMount')    
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState)                        
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)                        
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate')                                
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
    let newPersonsArr = this.state.persons.slice();
    newPersonsArr.splice(index, 1);

    this.setState({
      persons: newPersonsArr
    })
  }
  
  render() {
    console.log('[App.js] Inside render')
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

        <TestBtn click={() => this.updateValue(this.getRandom())}/>

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

          <PersonsList list={this.state.persons} onDeleteUser={this.deleteUser} />

          <Input newValue={(e) => this.updateName(this.getInputValue(e))} 
                value={this.state.persons[0] && this.state.persons[0].name}
                name={'Enter a new name'}/>

      </React.Fragment>
    );
  }
}

export default App;