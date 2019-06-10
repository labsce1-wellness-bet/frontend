import React from "react";
import authReducer from "./lib/reducers/authReducer";
import { AuthWrapper, BackgroundImage } from "./AuthStyles";
import { LoginSection } from "./sections/LoginSection/LoginSection";

import KittySleepingSrc from "./lib/assets/kitty-sleeping.png";
import base64KittySleeping from "./lib/base64Data/base64-kitty-sleeping";

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const [authState, authDispatch] = authReducer();
  return (
    <AuthWrapper>
      <BackgroundImage
        alt={""}
        base64={base64KittySleeping}
        src={KittySleepingSrc}
      />
      <LoginSection />
    </AuthWrapper>
  );
};

export default Auth;
