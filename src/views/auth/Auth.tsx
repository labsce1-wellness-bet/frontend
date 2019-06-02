// Package imports
import React, { useState } from "react";

// Custom Components
import {
  AuthWrapper,
  BackgroundImage,
  MainContent,
  HeaderContent,
  GetStartedForm,
  FooterContent,
  StyledLink,
} from "./AuthStyles";
import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";

// Lib folder files
import { Logo } from "./lib/assets/Logo";
import KittySleepingSrc from "./lib/assets/kitty-sleeping.png";
import base64KittySleeping from "./lib/base64Data/base64-kitty-sleeping";

// Material UI Components
import { AccountCircle, Lock } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";

export interface AuthProps {}

const Auth: React.SFC<AuthProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AuthWrapper>
      <BackgroundImage
        alt={""}
        base64={base64KittySleeping}
        src={KittySleepingSrc}
      />
      <MainContent>
        <HeaderContent>
          <Logo height="34" width="61" fill="none" />
          <h1 className="organization">Wellness Bet</h1>
          <h2 className="category">Sleep</h2>
        </HeaderContent>
        <GetStartedForm>
          <RoundedInputBox
            icon={<AccountCircle color="inherit" />}
            value={username}
            setValue={setUsername}
            placeholder={"Username"}
            className="input-box"
          />
          <RoundedInputBox
            icon={<Lock color="inherit" />}
            value={password}
            setValue={setPassword}
            placeholder={"Password"}
            className="input-box"
          />
          <Fab
            className="submit-btn"
            color="primary"
            variant="extended"
            aria-label="Get Started">
            Get Started
          </Fab>
        </GetStartedForm>
        <FooterContent>
          <StyledLink to="/">Create Account</StyledLink>
          <StyledLink to="/">Need Help?</StyledLink>
        </FooterContent>
      </MainContent>
    </AuthWrapper>
  );
};

export default Auth;
