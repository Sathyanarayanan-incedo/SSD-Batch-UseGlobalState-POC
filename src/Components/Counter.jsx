import { useGlobalState, GlobalStateProvider } from './GlobalState';

const Counter = () => {
    const [state, setState] = useGlobalState();
  
    const increment = () => {
      setState({ count: state.count + 1 });
    };
    return (
      <div>
        <p>Count: {state.count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

export default Counter;