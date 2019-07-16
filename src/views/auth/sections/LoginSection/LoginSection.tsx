import React, { useState, useEffect } from "react";
import {
  LoginWrapper,
  LoginContent,
  HeaderContent,
  GetStartedForm,
  FooterContent,
  StyledLink,
} from "./LoginStyles";
import { Logo } from "../../lib/assets/Logo";
import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";
import { Lock, Email } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import Auth from "Auth/Auth.js";
import { useGlobalContextValue } from "GlobalContext/GlobalContext";
import { useUserContextValue } from "GlobalContext/_UserContext";

export interface Props {
  history: any;
}

const LoginSection = (props: any) => {
  console.log(props.history);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [state, dispatch] = useGlobalContextValue();
  const [userState, userDispatch] = useUserContextValue();
  const auth0 = new Auth();
  const setText = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onLogin = () => {
    console.log("on login function");
    auth0.login(values);
  };
  const handleGetUserInfo = (user: any) => {
    userDispatch({ type: "setUserInfo", user });
  };

  useEffect(() => {
    console.log(window.localStorage.access_token);
    if (window.localStorage.access_token) {
      console.log("if local storage", window.localStorage.access_token);
      auth0.returnUser(handleGetUserInfo);
      dispatch({ type: "isAuth" });
      props.history.push("/dashboard/start");
    }
  }, []);

  return (
    <LoginWrapper>
      <LoginContent>
        <HeaderContent>
          <Logo height="34" width="61" fill="none" />
          <h1 className="organization">Wellness Bet</h1>
          <h2 className="category">Sleep</h2>
        </HeaderContent>
        {/* TODO: Form validation */}
        <GetStartedForm
          onSubmit={(e: any) => {
            e.preventDefault();
            onLogin();
          }}>
          <RoundedInputBox
            icon={<Email color="inherit" />}
            value={values.email}
            type="text"
            name="email"
            onChange={setText}
            placeholder={"Email"}
            className="input-box"
          />
          <RoundedInputBox
            icon={<Lock color="inherit" />}
            value={values.password}
            type="password"
            name="password"
            onChange={setText}
            placeholder={"Password"}
            className="input-box"
          />
          <Fab
            className="submit-btn"
            color="primary"
            variant="extended"
            aria-label="Get Started"
            type="submit">
            Login
          </Fab>
        </GetStartedForm>
        <FooterContent>
          <StyledLink to={{ search: "?view=signup" }}>
            Create Account
          </StyledLink>
          <StyledLink to="/">Need Help?</StyledLink>
        </FooterContent>
      </LoginContent>
    </LoginWrapper>
  );
};

export { LoginSection };
