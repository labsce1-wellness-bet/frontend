import React, { useReducer, useContext, createContext } from "react";
export const UserContext = createContext();

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

export const UserContextProvider = ({ children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

export const useUserContextValue = () => useContext(UserContext);
