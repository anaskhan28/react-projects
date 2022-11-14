import React from 'react';
import './App.css';
import { Person } from './Person';

function App() {
  
  return (
  <div className='App'>
    <Person 
    name="Codedamn"
    email="codedamn@gmail.com"
    membership= "pro"
    favouriteNumber={3}
    languages={["Javascript", "python", "java"]}
    // country = {Country.USA}
    />
    </div>
  );
}

export default App;
