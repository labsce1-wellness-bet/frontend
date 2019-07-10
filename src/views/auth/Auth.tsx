import React from "react";
import { AuthWrapper, BackgroundImage } from "./AuthStyles";
import { LoginSection } from "./sections/LoginSection/LoginSection";
import { SignupSection } from "./sections/SignupSection/SignupSection";
import KittySleepingSrc from "./lib/assets/kitty-sleeping.png";
import base64KittySleeping from "./lib/base64Data/base64-kitty-sleeping";

export interface AuthProps {
  location: {
    search: string;
  };
  history: any;
}

const Auth: React.SFC<AuthProps> = ({ location, history }) => {
  let params = new URLSearchParams(location.search);
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
        <LoginSection history={history} />
      )}
    </AuthWrapper>
  );
};

export default Auth;
