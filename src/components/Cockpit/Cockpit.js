import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

// functional component
const cockpit = props => {  
    // useRef hook  
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext)

    // first argument is our action/s
    // second argument determines when this executes
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // we call out click method inside our useEffect
      // as it runs after every render cycle 
      // which allows react to connect our reference 
      toggleBtnRef.current.click();
      return () => {
        console.log('[Cockpit.js] Cleanup work in useEffect'); 
      };  
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] Cleanup work in 2nd useEffect'); 
      };
    });

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red;
    };

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1) {
      assignedClasses.push(classes.bold); 
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>Toggle persons</button>
            <button onClick={authContext.login}>Login!</button>
        </div>
    );
}; 

// wrap export in React.memo()
export default React.memo(cockpit);