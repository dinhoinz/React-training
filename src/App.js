import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'
import Person from './Person/Person'


const StyledButton = styled.button`
background-color: ${props => props.alt ? 'red': 'green'};
color: black;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color:  ${props => props.alt ? 'salmon': 'lightgreen'};
  color: black;
}
`;
class App extends Component {
  state = {
    persons: [
      { id:"foo1j31", name: "Fred", age: "24" },
      { id:"foo121233", name: "Gabriel", age: "25" },
      { id:"foo15qa1", name: "Isabela", age: "26" }
      ],
    otherState: "Some other value",
    showPersons: false,
    personString: "persons"
  }

  namechangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    // const style = {
    //   backgroundColor: "white",
    //   color: "black",
    //   font: "inherit",
    //   border: "1px solid blue", NOW I'M USING STYLED COMPONENTS
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          key={person.id}
          changed={(event) => this.namechangedHandler(event, person.id)}
          />
        })}
        </div>
      );
      // style.backgroundColor = "red";
      // style.color = "white";
      // style[":hover"] = {
      //   backgroundColor: "salmon", IMPORT RADIUM TO USE THIS
      //   color: "black"
      // }
    }
    
    const classes = []

    if(this.state.persons.length <= 2){
      classes.push("black"); 
    }
    if(this.state.persons.length <= 1){
      classes.push("bold"); 
    }
    if(this.state.persons.length < 1){
      classes.push("underline"); 
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>There {this.state.persons.length <= 1 ? "is" : "are"} {this.state.persons.length == 0? "no" : this.state.persons.length} {this.state.persons.length == 1 ? "person" : "persons"} left</p>
        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch Name</StyledButton>
        {persons}
      </div> 
    );
  }
}

export default App;
