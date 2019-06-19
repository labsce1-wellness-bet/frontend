import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "components/PrivateRoute/PrivateRoute";
import Callback from "views/callback/Callback";
import Test from "views/test/Test";
import AuthPage from "views/auth/Auth";
import Fitbit from "views/fitbit/Fitbit";
import Dashboard from "views/dashboard/Dashboard";
import { GlobalContext } from "./GlobalContext/GlobalContext";

//The name of the tab
document.title = "Wellness Bet deploy";

const App: React.FC = props => {
  return (
    <div className="App">
      <GlobalContext.Provider value={{}}>
        <Route exact path="/" component={AuthPage} />
        <Route exact path="/callback" component={Callback} />
        // @ts-ignore
        <PrivateRoute path="/test" component={Test} isAuthenticated={true} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/fitbit" component={Fitbit} />
      </GlobalContext.Provider>
    </div>
  );
};

export default App;
