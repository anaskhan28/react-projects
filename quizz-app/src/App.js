import './App.css';
import Menu from './components/Menu';
import {useState} from "react";
import {GameStateContext} from './helpers/Contexts';
import Quiz from './components/Quiz';
// game state:["menu", "playing","finished"]
function App() {
  const [gameState, setGameState] = useState('menu')
  const [userName, setUserName] = useState('');

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider value= {{gameState,setGameState,userName,setUserName}}>
      {gameState === "menu" && <Menu/> }
      {gameState === "playing" && <Quiz/>}
      </GameStateContext.Provider>
    </div>
  );
}

export default App;
