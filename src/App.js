import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <input type="text" className="entry"></input>
      <button className="submit-button">
        <img src={process.env.PUBLIC_URL + "edit.png"} alt="add-entry"></img>
      </button>
      {/* list of todos */}
    </div>
  );
}

export default App;
