import React from 'react';
import './App.css';
import TodoItem from './TodoItem/TodoItem.js';

function App() {
  return (
    <div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <div className="input">
        <input type="text" className="entry"></input>
        <input type="image"  className="submit-button" src={process.env.PUBLIC_URL + "edit.png"} alt="Add entry" />
      </div>
      <ul>
        <TodoItem label="Item#1" status="completed"></TodoItem>
        <TodoItem label="Item#2" status="in-progress"></TodoItem>
      </ul>
    </div>
  );
}

export default App;
