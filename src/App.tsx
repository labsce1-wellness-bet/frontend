import React from "react";
import { Route } from "react-router-dom";
import Home from "views/home/Home";

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
