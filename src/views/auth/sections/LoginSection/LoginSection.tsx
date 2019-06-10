import React from "react";
import {
  LoginWrapper,
  MainContent,
  HeaderContent,
  GetStartedForm,
  FooterContent,
  StyledLink,
} from "./LoginStyles";
import { Logo } from "../../lib/assets/Logo";
import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";
import { AccountCircle, Lock } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";

export interface Props {}

const LoginSection: React.SFC<Props> = ({}) => {
  return (
    <LoginWrapper>
      <MainContent>
        <HeaderContent>
          <Logo height="34" width="61" fill="none" />
          <h1 className="organization">Wellness Bet</h1>
          <h2 className="category">Sleep</h2>
        </HeaderContent>
        <GetStartedForm>
          <RoundedInputBox
            icon={<AccountCircle color="inherit" />}
            // value={username}
            type="text"
            onChange={(e: any) => {
              //   setUsername(e.target.value);
            }}
            placeholder={"Username"}
            className="input-box"
          />
          <RoundedInputBox
            icon={<Lock color="inherit" />}
            // value={password}
            type="password"
            onChange={(e: any) => {
              //   setPassword(e.target.value);
            }}
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
    </LoginWrapper>
  );
};

export { LoginSection };
