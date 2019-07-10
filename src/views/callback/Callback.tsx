import React, { useEffect } from "react";
import {
  //  GlobalContext,
  useGlobalContextValue,
} from "GlobalContext/GlobalContext";
import Auth from "Auth/Auth";
import { useUserContextValue } from "GlobalContext/_UserContext";

export interface Props {
  history: any;
}

const Callback: React.SFC<Props> = props => {
  const [dispatch] = useGlobalContextValue();
  const [userDispatch] = useUserContextValue();

  const handleGetUserInfo = (user: any) => {
    userDispatch({ type: "setUserInfo", user });
  };

  useEffect(() => {
    const auth0 = new Auth();
    auth0.getUserInfo(handleGetUserInfo);
    if (window.localStorage.access_token) {
      dispatch({ type: "isAuth" });
      props.history.push("/dashboard/start");
    } else {
      props.history.push("/");
    }
  }, []);
  return <div></div>;
};

export default Callback;
