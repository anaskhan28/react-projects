import './App.css';
import {useEffect} from 'react';

function App() {

  useEffect(()=>{
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
    .then((response)=> response.json()).then((data) =>{
          console.log(data);
    });
  });
  return (
    <div className="App">
    </div>
  );
}

export default App;
