import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => {
    const [state, setState] = useContext(GlobalStateContext);
    return [state, setState];
  };

  export const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({ count: 0 });
    return (
      <GlobalStateContext.Provider value={[state, setState]}>
        {children}
      </GlobalStateContext.Provider>    
    );
  };