import React from "react";
import { Route } from "react-router-dom";
import AuthFitbit from "../../components/Fitbit/AuthFitbit";
import FitbitConnect from "../../components/Fitbit/FitbitConnect";

export interface FitbitProps {
  userId: number;
}

const Callback: React.SFC<FitbitProps> = props => {
  return (
    <div>
      <AuthFitbit {...props} userId={1} />
      <Route path="/fitbit/connecting" component={FitbitConnect} />
    </div>
  );
};

export default Callback;
