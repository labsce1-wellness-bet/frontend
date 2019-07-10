import React, { useEffect } from "react";
import { useGlobalContextValue } from "GlobalContext/GlobalContext";
import Auth from "Auth/Auth";
import { useUserContextValue } from "GlobalContext/_UserContext";

export interface Props {
  history: any;
}

const Callback: React.SFC<Props> = props => {
  const [state, dispatch] = useGlobalContextValue();
  const [userDispatch] = useUserContextValue();

  const handleGetUserInfo = (user: any) => {
    userDispatch({ type: "setUserInfo", user });
  };

  useEffect(() => {
    const auth0 = new Auth();
    dispatch({ type: "isAuth" });
    if (state.isAuthenticated) {
      auth0.getUserInfo(handleGetUserInfo);
      props.history.push("/dashboard/start");
    }
  }, [state.isAuthenticated]);
  return <div></div>;
};

export default Callback;
