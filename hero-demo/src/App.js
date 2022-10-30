import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Build A Hero</h1>
    <label>Name: </label>
    <input type="text" style={{margin:10}}/>
    <label>Age: </label>
    <input type="number" style={{margin:10}}/>
    <label>Height: </label>
    <input type="text" style={{margin:10}}/>
    <label>SuperPower: </label>
    <input type="text" style={{margin:10}}/>
    </div>
  );
}

export default App;
