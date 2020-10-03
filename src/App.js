import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.todoEntries = [
      {label:"Get garbage", status:"completed"},
      {label:"Grocery shop", status:"in-progress"}
    ];
  }
  render () {
    return (<div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <div className="input">
        <input type="text" className="entry"></input>
        <input type="image"  className="submit-button" src={process.env.PUBLIC_URL + "edit.png"} alt="Add entry" onClick={this.submitEntry}/>
      </div>
      <TodoList todoEntries={this.todoEntries}></TodoList>
    </div>);
  };
}

export default App;
