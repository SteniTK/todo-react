import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList.js';
import getTodoEntries from './dataService.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.todoEntries = getTodoEntries();
    this.state = {
      'todoList':this.todoEntries,
      'textInput': ""
    };
  }

  submitEntry = (event) => {
    const text = this.state.textInput;
    if( text !== "" ){
      this.todoEntries = this.todoEntries.concat({label: text, status: "to-do"});
      this.setState({'todoList':this.todoEntries, 'textInput': ""});
    } 
  }

  onTextEntry = (event) => {
    this.setState({'textInput': event.target.value});
  }

  handleKeyDown = (event) => {
    if (event.key === "Enter"){
      this.submitEntry();
    }
  }

  getIndexFromId = (id) => {
    return id.split('-')[1] || -1;
  }

  onDelete = (id) => {
    console.log("Hurray you're here");
    const index = this.getIndexFromId(id);
    this.todoEntries.splice(index, 1);
    this.setState({'todoList': this.todoEntries});
  }

  onStatusChangeHandler = (id, newStatus) => {
    const index = this.getIndexFromId(id);
    this.todoEntries[index].status = newStatus;
    this.setState({'todoList': this.todoEntries});
  }

  onEdit = (id, newLabel) => {
    const index = this.getIndexFromId(id);
    this.todoEntries[index].label = newLabel;
    this.setState({'todoList': this.todoEntries});
  }

  render () {
    return (<div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <div className="input">
        <input type="text" className="entry" onChange={this.onTextEntry} onKeyDown={this.handleKeyDown} value={this.state.textInput}></input>
        <input type="image" className="submit-button" src={process.env.PUBLIC_URL + "edit.png"} alt="Add entry" onClick={this.submitEntry}/>
      </div>
      <TodoList todoEntries={this.state.todoList} onDelete={this.onDelete} onStatusChange={this.onStatusChangeHandler} onEdit={this.onEdit}></TodoList>
    </div>);
  };
}

export default App;
