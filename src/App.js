import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Fred", age: "24" },
      { name: "Gabriel", age: "25" },
      { name: "Isabela", age: "26" }
      ],
    otherState: "Some other value"
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked!")
    // DONT DO THIS this.state.persons[0].name = "Frederico"
    this.setState( {
      persons: [
      { name: newName, age: "24" },
      { name: "Gabriel", age: "25" },
      { name: "Isabela", age: "27" }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this,"Frederico")}>Switch Name</button>
        <Person
         name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,"Fred!!")}>My Hobbies: Racing</Person>
        <Person
         name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
