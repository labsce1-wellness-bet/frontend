import React from "react";
import authReducer from "./lib/reducers/authReducer";
import { AuthWrapper, BackgroundImage } from "./AuthStyles";
import { LoginSection } from "./sections/LoginSection/LoginSection";
import { SignupSection } from "./sections/SignupSection/SignupSection";

import KittySleepingSrc from "./lib/assets/kitty-sleeping.png";
import base64KittySleeping from "./lib/base64Data/base64-kitty-sleeping";

export interface AuthProps {
  location: {
    search: string;
  };
}

const Auth: React.SFC<AuthProps> = ({ location }) => {
  let params = new URLSearchParams(location.search);
  const [authState, authDispatch] = authReducer();
  const SIGNUP = "signup";
  return (
    <AuthWrapper>
      <BackgroundImage
        alt={""}
        base64={base64KittySleeping}
        src={KittySleepingSrc}
        should_blur_image={params.get("view") === SIGNUP ? "true" : "false"}
      />
      {params.get("view") === SIGNUP ? (
        <SignupSection />
      ) : (
        <LoginSection />
      )}
    </AuthWrapper>
  );
};

export default Auth;
