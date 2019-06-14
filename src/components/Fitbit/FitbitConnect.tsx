import React from "react";

interface FitbitConnectProps {
  location: any;
  search: string;
}

const FitbitConnect: React.SFC<FitbitConnectProps> = props => {
  const authCode: string = props.location.search.match(/(?<==).+?(?=&)/)[0];
  const userId: number = props.location.search.match(/(?<=userId)(.*)/)[0];
  return (
    <div>
      <h1>Fitbit Connecting</h1>
    </div>
  );
};

export default FitbitConnect;
