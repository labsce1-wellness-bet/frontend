import React from "react";
import { Route } from "react-router-dom";
import Auth from "views/auth/Auth";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Auth} />
    </div>
  );
};

export default App;
