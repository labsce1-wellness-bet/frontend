import React, { useReducer, useContext, createContext } from "react";
import axios from "axios";
export const GroupContext = createContext();

export const baseURL = process.env.REACT_APP_BACKEND_URL;

const reducer = (state, action) => {
  console.log("Group context", action);
  switch (action.type) {
    case "getAllGroupsInfo":
      return {
        ...state,
        groups: action.payload,
        error: "",
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  groups: [],
  errorMessage: "",
};

export const GroupContextProvider = ({ children }) => (
  <GroupContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </GroupContext.Provider>
);

export const useGroupContextValue = () => useContext(GroupContext);
