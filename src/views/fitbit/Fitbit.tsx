import React from "react";
import { Route } from "react-router-dom";
import FitbitConnect from "../../components/Fitbit/FitbitConnect";

export interface FitbitProps {}

const Callback: React.SFC<FitbitProps> = props => {
  return (
    <div>
      <Route path="/fitbit/connecting" component={FitbitConnect} />
    </div>
  );
};

export default Callback;
