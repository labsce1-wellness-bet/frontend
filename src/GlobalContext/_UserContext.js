import React, { useReducer, useContext, createContext } from "react";
export const _UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "setUserInfo":
      return {
        ...state,
        auth0Id: action.user.sub,
        nickname: action.user.nickname,
        picture: action.user.picture,
        email: action.user.name,
      };

    default:
      return state;
  }
};

const initialState = {
  auth0Id: "",
  nickname: "",
  picture: "",
  firstName: "",
  lastName: "",
  email: "",
  groups: [],
};

export const _UserContextProvider = ({ children }) => (
  <_UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </_UserContext.Provider>
);

export const useUserContextValue = () => useContext(_UserContext);
