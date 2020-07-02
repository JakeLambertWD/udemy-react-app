import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

// class-based component
class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changedCounter: 0,
    authentication: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    
    // this.setState( {persons: persons, changedCounter: this.state.changedCounter + 1} );
    // this is the best practice to use setState()
    // first argument is the old state
    // second argument is the current props
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changedCounter: prevState.changedCounter + 1
      };
    });
  };

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render () { 
    console.log('[App.js] render');
    let persons = null;
    
    if ( this.state.showPersons ) {
      persons = (
        <Persons
            persons={this.state.persons}
            clicked={this.deletePersonsHandler}
            changed={this.nameChangedHandler} 
            isAuthenticated={this.state.authenticated}
        />
      );
    }
     
    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
          }}>
          Remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{authenticated: this.state.authenticated, login: this.loginHandler}} 
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null }
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;