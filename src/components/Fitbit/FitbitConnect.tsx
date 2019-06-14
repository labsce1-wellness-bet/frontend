import React from "react";

interface FitbitConnectProps {}

const FitbitConnect: React.SFC<FitbitConnectProps> = props => {
  console.log("Fitbit Connect", props);
  return (
    <div>
      <h1>Fitbit Connecting</h1>
    </div>
  );
};

export default FitbitConnect;
