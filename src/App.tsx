import React from "react";
import { Route } from "react-router-dom";
import Home from "views/home/Home";

document.title = 'Wellness Bet';

const App: React.FC = () => {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
