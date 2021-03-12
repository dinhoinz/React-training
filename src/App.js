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
    otherState: "Some other value",
    showPersons: false
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

  changedHandler = (event) => {
    this.setState( {
      persons: [
      { name: "Fred", age: "24" },
      { name: event.target.value, age: "25" },
      { name: "Isabela", age: "27" }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={ () => this.togglePersonsHandler("Frederico")}>Switch Name</button>
        { this.state.showPersons ? 
        <div>
        <Person
         name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age} 
         click={this.switchNameHandler.bind(this,"Fred!!")}
         changed={this.changedHandler}
         >My Hobbies: Racing</Person>
        <Person
         name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
