import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useGlobalState, GlobalStateProvider } from './Components/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalStateProvider>
        <Counter/>
      </GlobalStateProvider>
    </div>
  );
}

export default App;
