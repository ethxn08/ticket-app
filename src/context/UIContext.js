import React, { createContext, useState } from "react";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const showMenu = () => {
    setHiddenMenu(false);
  };

  const hideMenu = () => {
    setHiddenMenu(true);
  };
  return (
    <UIContext.Provider value={{ hiddenMenu, showMenu, hideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
