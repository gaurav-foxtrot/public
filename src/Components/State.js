import React, { createContext, useState } from 'react';

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const disableTextbox = () => {
    setIsDisabled(true);
  };

  const enableTextbox = () => {
    setIsDisabled(false);
  };

  return (
    <StateContext.Provider value={{ isDisabled, disableTextbox, enableTextbox }}>
      {children}
    </StateContext.Provider>
  );
}
