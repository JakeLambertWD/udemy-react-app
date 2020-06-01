import React from 'react';
import classes from './Person.css';

const person = ( props ) => {
    return (
        // assign style
        // <div className="Person" style={style}>
        // <StyledDiv>
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
        // </StyledDiv>
        //</div>
    )
};
// wrap our function in the radium function which injects extra functionality  
export default person;