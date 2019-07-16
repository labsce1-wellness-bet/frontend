import React, { useReducer, useContext, createContext } from "react";
export const GlobalContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "isAuth":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "NOT_AUTH":
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

const initialState = {
  isAuthenticated: false,
};

export const GlobalContextProvider = ({ children }) => (
  <GlobalContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GlobalContext.Provider>
);

export const useGlobalContextValue = () => useContext(GlobalContext);
