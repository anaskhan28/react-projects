import React from 'react';
import './App.css';
import { Person, Country } from './Person';

function App() {
  
  return (
  <div className='App'>
    <Person 
    name="Anas Khan"
    email="khananasatique@gmail.com"
    age={21}
    isMarried={false}
    friends={["arif","danish","atharva"]}
    country = {Country.USA}
    />
    </div>
  );
}

export default App;
