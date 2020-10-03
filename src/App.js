import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.todoEntries = [
      {label:"Get garbage", status:"completed", index:0},
      {label:"Grocery shop", status:"in-progress", index:1}
    ];
    this.state = {
      'todoList':this.todoEntries
    };
    this.submitEntry = this.submitEntry.bind(this);
  }

  submitEntry() {
    this.todoEntries = this.todoEntries.concat({label: "adding", status: "", index:3});
    this.setState({'todoList':this.todoEntries});
  }

  render () {
    return (<div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <div className="input">
        <input type="text" className="entry"></input>
        <input type="image" className="submit-button" src={process.env.PUBLIC_URL + "edit.png"} alt="Add entry" onClick={this.submitEntry}/>
      </div>
      <TodoList todoEntries={this.todoEntries}></TodoList>
    </div>);
  };
}

export default App;
