import React, { useState } from "react";
import {
  SignupWrapper,
  SignupContent,
  HeaderContent,
  CreateAccountForm,
  FooterContent,
  StyledLink,
} from "./SignupStyles";
import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";
import { Lock, Email } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";

// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Auth from "Auth/Auth.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const SignupSection = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const auth0 = new Auth();
  const setText = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSignup = () => {
    console.log(values);
    auth0.signup(values);
  };

  return (
    <SignupWrapper>
      <SignupContent>
        <HeaderContent>
          <h2 className="title">Create Account</h2>
        </HeaderContent>
        <CreateAccountForm
          onSubmit={(e: any) => {
            e.preventDefault();
            onSignup();
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
            Sign up
          </Fab>
        </CreateAccountForm>
        <FooterContent>
          <StyledLink to="/">{"Return to Homepage"}</StyledLink>
        </FooterContent>
      </SignupContent>
    </SignupWrapper>
  );
};

export { SignupSection };
