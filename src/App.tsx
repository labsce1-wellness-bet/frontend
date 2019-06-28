import React, { useContext, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Callback from "views/callback/Callback";
import Test from "views/test/Test";
import AuthPage from "views/auth/Auth";
import Fitbit from "views/fitbit/Fitbit";
import Dashboard from "views/dashboard/Dashboard";
import Auth from "./Auth/Auth";
import {
  GlobalContextProvider,
  useGlobalContextValue,
} from "./GlobalContext/GlobalContext";
import {
  _UserContextProvider,
  useUserContextValue,
} from "GlobalContext/_UserContext";
import { GroupContextProvider } from "GlobalContext/GroupContext";

//The name of the tab
document.title = "Wellness Bet deploy";

const App: React.FC = props => {
  // const [state, dispatch] = useGlobalContextValue();
  // const [userState, userDispatch] = useUserContextValue();

  // const handleGetUserInfo = (user: any) => {
  //   userDispatch({ type: "setUserInfo", user });
  // };

  // useEffect(() => {
  //   const auth0 = new Auth();
  //   auth0.getUserInfo(handleGetUserInfo);
  //   if (window.localStorage.access_token) {
  //     dispatch({ type: "isAuth" });
  //     // console.log(window.history);
  //     // props.history.push("/dashboard/start");
  //   }
  // }, []);
  return (
    <div className="App">
      <GlobalContextProvider>
        <_UserContextProvider>
          <GroupContextProvider>
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/callback" component={Callback} />
            <PrivateRoute path="/test" component={Test} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/fitbit" component={Fitbit} />
          </GroupContextProvider>
        </_UserContextProvider>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
