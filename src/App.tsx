import React from "react";
import { Route } from "react-router-dom";
import Callback from "views/callback/Callback";
import AuthPage from "views/auth/Auth";
import Auth from "./Auth/Auth"; //Auth0 code

//run auth0
const auth = new Auth();
auth.login();

//The name of the tab
document.title = "Wellness Bet deploy";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={AuthPage} />
      <Route exact path="/callback" component={Callback} />
    </div>
  );
};

export default App;
