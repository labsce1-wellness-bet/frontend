import React, { useContext, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Callback from "views/callback/Callback";
import Test from "views/test/Test";
import AuthPage from "views/auth/Auth";
import Fitbit from "views/fitbit/Fitbit";
import Dashboard from "views/dashboard/Dashboard";
import { GlobalContextProvider } from "./GlobalContext/GlobalContext";

//The name of the tab
document.title = "Wellness Bet deploy";

const App: React.FC = props => {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/callback" component={Callback} />
        <PrivateRoute path="/test" component={Test} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/fitbit" component={Fitbit} />
      </GlobalContextProvider>
    </div>
  );
};

export default App;
