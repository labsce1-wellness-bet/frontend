import React from "react";
export interface AuthFitbitProps {
  userId: number;
}

const AuthFitbit: React.SFC<AuthFitbitProps> = props => {
  console.log("AuthFitbit", props);
  const passState: string = `userId=${props.userId}`;
  let redirectUri: string = process.env.REACT_APP_FITBIT_REDIRECT_URI || "";
  const encodedUri: string = encodeURI(redirectUri);
  const fitbitClientId: string | undefined =
    process.env.REACT_APP_FITBIT_CLIENT_ID;
  return (
    <a
      href={`https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${fitbitClientId}&redirect_uri=${encodedUri}&scope=sleep&state=${passState}`}>
      Connect Fitbit
    </a>
  );
};

export default AuthFitbit;
