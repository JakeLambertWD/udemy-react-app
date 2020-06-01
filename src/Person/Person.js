import React from 'react';
import './Person.css';

// function
// props parses all the attributes we added to the component
const person = ( props ) => {
    // outputting dynamic content
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/*children any elements between opening and closing tag of our component*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}  value={props.name}/>
        </div>
    )
};

export default person;