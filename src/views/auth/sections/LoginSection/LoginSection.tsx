import React, { useState, useContext } from "react";
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
import { AuthState } from "../../lib/reducers/auth-state.interface";
import Auth from "Auth/Auth.js";
import auth0 from "auth0-js";

/* export interface Props {
 *     state: AuthState;
 *     dispatch: Function;
 * }*/

const LoginSection = () => {
    const [values, setValues] = useState({
	email: "",
	password: ""
    });
    const auth0 = new Auth();
    const setText = (e: any) => {
	setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onLogin = () => {
	auth0.login(values);
    };
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
		    onSubmit={(e:any) => {
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
			aria-label="Get Started">
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
