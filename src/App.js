import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    // The findIndex() method executes the callback function once for every index in the array 
    // until it finds the one where callback returns a truthly value.
    // If such an element is found, findIndex() immediately returns the element's index.

    // return the state objects index that matches the changed name id 
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // get the object in the persons array by its index
    const personObj = {
      // Spread operator
      ...this.state.persons[personIndex]
    };

    // change the name to the contents of the input field
    personObj.name = event.target.value;

    // get a copy of the persons array
    const persons = [...this.state.persons];
    // update object 
    persons[personIndex] = personObj;
    // update the state array to the updated array
    this.setState( {persons: persons} );
  }


  deletePersonsHandler = (personIndex) => {
    // the spread operator makes a copy of the persons array
    const persons = [...this.state.persons];
    // removes the 1 element from array according to its index
    persons.splice(personIndex, 1);
    // update state
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    // store boolean as variable 
    const doesShow = this.state.showPersons;
    // reverse the boolean 
    this.setState({showPersons: !doesShow})
  }


  render () { 
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    // declare the variable
    let persons = null;
    // if showPersons is true
    if ( this.state.showPersons ) {
      persons = (
        // JSX
        <div>
          {/* the map method loops through the persons array */}
          {/* for every item in the array, it gives the item itself in person*/}
          {/* and the postion of the item in index */}
          {this.state.persons.map((person, index) => {
              // Call Person.js 
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle persons</button>
        {/* refer to the persons variable */}
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
