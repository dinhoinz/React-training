import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

    let persons = null;
    let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <ErrorBoundary key={person.id}>
          <Person 
          click={() => this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}
          changed={(event) => this.namechangedHandler(event, person.id)}/>
          </ErrorBoundary>
        })}
        </div>
      );

      btnClass = classes.Red;
    }
    
    const assignedClasses = []

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.black); 
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold); 
    }
    if(this.state.persons.length < 1){
      assignedClasses.push(classes.underline); 
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>There {this.state.persons.length <= 1 ? "is" : "are"} {this.state.persons.length === 0? "no" : this.state.persons.length} {this.state.persons.length === 1 ? "person" : "persons"} left</p>
        <button className={btnClass} alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div> 
    );
  }
}

export default App;
