import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList.js';
import getTodoEntries from './dataService.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.todoEntries = getTodoEntries();
    this.state = {
      'todoList':this.todoEntries
    };
  }

  submitEntry = (event) => {
    this.todoEntries = this.todoEntries.concat({label: this.textInput.value, status: "to-do"});
    this.setState({'todoList':this.todoEntries});
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter"){
      this.todoEntries = this.todoEntries.concat({label: this.textInput.value, status: "to-do"});
      this.textInput.value = ''; //how does this work if its not in state?
      this.setState({'todoList':this.todoEntries});
    }
  }

  onDelete = (id) => {
    const index = id.split('-')[1];
    console.log(index);
    this.todoEntries.splice(index, 1);
    console.log(this.todoEntries);
    this.setState({'todoList': this.todoEntries});
  }

  render () {
    return (<div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <div className="input">
        <input type="text" className="entry" ref={(input) => this.textInput = input} onKeyDown={this.handleKeyDown}></input>
        <input type="image" className="submit-button" src={process.env.PUBLIC_URL + "edit.png"} alt="Add entry" onClick={this.submitEntry}/>
      </div>
      <TodoList todoEntries={this.todoEntries} onDelete={this.onDelete}></TodoList>
    </div>);
  };
}

export default App;
