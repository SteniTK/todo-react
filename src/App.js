import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>TO DO</h1>
      <h2>What would you like to do today?</h2>
      <div class="input">
        <input type="text" className="entry"></input>
        <input type="image"  className="submit-button" src={process.env.PUBLIC_URL + "edit.png"} alt="Add entry" />
      </div>
      {/* list of todos */}
    </div>
  );
}

export default App;
