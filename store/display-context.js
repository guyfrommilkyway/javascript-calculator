// import packages below
import { createContext } from 'react';

// import utils below
import useDisplay from '@/hooks/useDisplay';

const DisplayContext = createContext({});

const DisplayContextProvider = (props) => {
  const { children } = props;

  const { display, calculateHandler, addHandler, deleteHandler, clearHandler } =
    useDisplay();

  const contextValue = {
    display,
    calculateHandler,
    addHandler,
    deleteHandler,
    clearHandler,
  };

  return (
    <DisplayContext.Provider value={contextValue}>
      {children}
    </DisplayContext.Provider>
  );
};

export { DisplayContext, DisplayContextProvider };
