import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Callback from "views/callback/Callback";
import Test from "views/test/Test";
import AuthPage from "views/auth/Auth";
import Fitbit from "views/fitbit/Fitbit";
import Dashboard from "views/dashboard/Dashboard";
//import Auth from "./Auth/Auth";
import {
  GlobalContextProvider,
  //useGlobalContextValue,
} from "./GlobalContext/GlobalContext";
import {
  UserContextProvider,
  //useUserContextValue,
} from "GlobalContext/UserContext";
import { GroupContextProvider } from "GlobalContext/GroupContext";

//The name of the tab
document.title = "Wellness Bet deploy";

const App: React.FC = props => {
  return (
    <div className="App">
      <GlobalContextProvider>
        <UserContextProvider>
          <GroupContextProvider>
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/callback" component={Callback} />
            <PrivateRoute path="/test" component={Test} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/fitbit" component={Fitbit} />
          </GroupContextProvider>
        </UserContextProvider>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
