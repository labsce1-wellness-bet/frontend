import React from "react";
// import {
//   LoginWrapper,
//   MainContent,
//   HeaderContent,
//   GetStartedForm,
//   FooterContent,
//   StyledLink,
// } from "./LoginStyles";
// import { Logo } from "../../lib/assets/Logo";
// import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";
// import { AccountCircle, Lock } from "@material-ui/icons";
// import Fab from "@material-ui/core/Fab";
import { AuthState } from "../../lib/reducers/auth-state.interface";
export interface Props {
  state: AuthState;
  dispatch: Function;
}

const SignupSection: React.SFC<Props> = () => {
  return <div>Sign-up</div>;
};

export { SignupSection };
