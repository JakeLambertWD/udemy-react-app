import React, { Component } from 'react';
import './App.css';
// import styled components
// import styled from 'styled-components';
import Person from './Person/Person';

// npm run eject

// install Radium
// npm install --save radium
// install Styled Components 
// npm install --save styled-components

// const StyledButton = styled.button`
//   /* ternary expression */
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 2px solid black;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const personObj = {
      ...this.state.persons[personIndex]
    };

    personObj.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = personObj;
    this.setState( {persons: persons} );
  }


  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }


  render () { 

    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        // JSX
        <div>
          {this.state.persons.map((person, index) => {
             
              return <Person 
              key={person.id}
              name={person.name} 
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonsHandler(index)}
              />
          })}
        </div>
      );
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      // push() adds a new item into the array
      classes.push('red'); // classes = ['red']
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        {/* Join() convert the elements of an array into a string. Display: red bold */}
        <p className={classes.join(' ')}>This is really working!</p>
        <button className='button' onClick={this.togglePersonsHandler}>Toggle persons</button> 
        {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle persons</StyledButton> */}
        {persons}
      </div>
    );
  }
}
export default App;