import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// react functional component 
const app = props => {
  // useState is a hook that allows us to manage state in a funcitonal component  
  // [] array destructuring which allows you to pull elements out of the array
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState, otherState);

  // Handle event with a function
  const switchNameHandler = (newName) => {
    // in this case, will merge this new state with the old state
    setPersonsState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons: [
        { name: 'Max', age: 28 },
        // target = input element & value = value of the target
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

    // inline styles. writing css in JS
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

  return (
    // JSX 
    // className translates to class in HTML
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      {/* we insert an arrow function so we can parse something */}
      <button 
      style={style} 
      onClick={() => switchNameHandler('auba')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        // parse handler as a property
        click={switchNameHandler}
        changed={nameChangedHandler}>
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
};

// export app component
export default app;
