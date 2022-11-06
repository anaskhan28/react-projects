import './App.css';
import {useState,useEffect} from 'react'

function App() {
  
  const [gameTitle, setGameTitle] = useState('');
  const [searchGames, setSearchGames] = useState([]);
  const [gameDeal, setGameDeal] = useState([]);

  const searchGame = ()=>{
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
    .then((response)=> response.json())
    .then((data) =>{
      console.log(data)
      setSearchGames(data)
      
    });
  };

  useEffect(()=>{
      fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=3`)
      .then((response)=>response.json())
      .then((data)=>{
        console.log(data)
        setGameDeal(data)
      })
  }, []);
 
  return (
    <div className="App">
    <div className = "searchSection">
      <h1>Search For A Game</h1>
      <input type='text' placeholder="CounterStrike..." onChange={(event)=>{
        setGameTitle(event.target.value);
      }}/>
      <button onClick={searchGame}>Search Game Title</button>
      <div className='games'>
        {searchGames.map((game, key)=>{
          return(
            <div className='game' key={key}>
            <h3>{game.external}</h3>
            
            <div>
            <img src={game.thumb} alt="game"/>
            <h4>${game.cheapest}</h4>
            </div>
            </div>
          )
        })}
      </div>
    </div>
    <div className="dealsSection">
      <h1>Latest Deals 🔥</h1>
      <div className='games deals'>
      {gameDeal.map((deal,key)=>{
        return <div className='game deals' key={key}>
        
        <h3>{deal.title}</h3>
        <img src={deal.thumb} alt = "deal-game"/>
        <h4>
          <ul>
          <li>Sale Price- ${deal.salePrice}</li>
          <li>Normal Price - ${deal.normalPrice}</li>
          <li>Total Savings - {deal.savings.substr(0,3)}%</li>
        </ul>
        </h4>
        </div>
      })}
      </div>

    </div>
    </div>
  );
}

export default App;
