import React from 'react';
import classes from './Person.css'

const person = (props) => {

    const rnd = Math.random();
    console.log("🚀 ~ file: Person.js ~ line 7 ~ person ~ rnd", rnd)
    if( rnd > 0.7 ){
        throw new Error( 'Something went wrong' );
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default person;