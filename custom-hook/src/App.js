import './App.css';
import { useToggle } from './useToggle';
import { Cat } from './Cat';
import { Count } from './Count';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
function App() {
  const client = new QueryClient();
 const [isVisible, toggle] = useToggle()
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <button onClick={toggle}>
        {isVisible? "Hide": "Show"}
      </button>
      {isVisible && <Cat/> }
      <Count/>
      
      </QueryClientProvider>
      
      
    </div>

  );
}

export default App;
