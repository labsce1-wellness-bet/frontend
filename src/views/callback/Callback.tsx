import React, { useState, useEffect, useContext, useReducer } from "react";
import {
  GlobalContext,
  useGlobalContextValue,
} from "GlobalContext/GlobalContext";
import Auth from "Auth/Auth";

export interface Props {
  history: any;
}

const Callback: React.SFC<Props> = props => {
  const [state, dispatch] = useGlobalContextValue();

  useEffect(() => {
    const auth0 = new Auth();
    auth0.getUserInfo();
    if (window.localStorage.access_token) {
      dispatch({ type: "isAuth" });
      console.log("useEffect", state.isAuthenticated);

      props.history.push("/dashboard/start");
    } else {
      props.history.push("/");
    }
  }, []);
  return <div></div>;
};

export default Callback;
