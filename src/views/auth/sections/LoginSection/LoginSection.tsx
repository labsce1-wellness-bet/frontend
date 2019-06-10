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
import { AuthState } from "../../lib/reducers/auth-state.interface";
export interface Props {
  state: AuthState;
  dispatch: Function;
}

const LoginSection: React.SFC<Props> = ({ state, dispatch }) => {
  const { username, password } = state;
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
            value={username}
            type="text"
            name="username"
            onChange={(e: React.SyntheticEvent) => {
              let target = e.target as HTMLInputElement;
              dispatch({
                type: "SET_TEXT",
                inputName: target.name,
                value: target.value,
              });
            }}
            placeholder={"Username"}
            className="input-box"
          />
          <RoundedInputBox
            icon={<Lock color="inherit" />}
            value={password}
            type="password"
            name="password"
            onChange={(e: React.SyntheticEvent) => {
              let target = e.target as HTMLInputElement;
              dispatch({
                type: "SET_TEXT",
                inputName: target.name,
                value: target.value,
              });
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
