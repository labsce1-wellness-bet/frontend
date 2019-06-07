import React from "react";
export interface AuthFitbitProps {
  userId: number;
}

const AuthFitbit: React.SFC<AuthFitbitProps> = props => {
  console.log("AuthFitbit", props);
  const state = `userId=${props.userId}`;
  const url: string = "http://localhost:3000/fitbit/connecting";
  const encodedUrl: string = encodeURI(url);

  return (
    <a
      href={`https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22DR4B&redirect_uri=${encodedUrl}&scope=sleep&state=${state}`}>
      Connect Fitbit
    </a>
  );
};

export default AuthFitbit;
