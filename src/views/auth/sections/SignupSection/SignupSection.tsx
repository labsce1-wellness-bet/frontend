import React from "react";
import {
    SignupWrapper,
    SignupContent,
    HeaderContent,
    CreateAccountForm,
    FooterContent,
    StyledLink,
} from "./SignupStyles";
import auth0 from "auth0-js";
import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";
import { Lock, Email } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
import { AuthState } from "../../lib/reducers/auth-state.interface";

export interface Props {
    state: AuthState;
    dispatch: Function;
}

const SignupSection: React.SFC<Props> = ({ state, dispatch }) => {
    var webAuth = new auth0.WebAuth({
	domain:       'akshay-gadkari.auth0.com/',
	clientID:     'fX2Ov3PrG67snp7CsUrUFcFE8RN5aglD'
    });
    
    const { email, password } = state;
    const signUp = () => {
	webAuth.signup({
	    connection: 'wellness-bet-backend',
	    email: email,
	    password: password
	}, function (err:any) {
            if (err) return alert('Something went wrong: ' + err.message);
            return alert('success signup without login!')
        });
	console.log('working');
    }
    
    return (
	<SignupWrapper>
	    <SignupContent>
		<HeaderContent>
		    <h2 className="title">Create Account</h2>
		</HeaderContent>
		<CreateAccountForm onSubmit={(e:any) => {
			e.preventDefault();
			signUp()
		} }>
		    <RoundedInputBox
			icon={<Email color="inherit" />}
			value={email}
			type="text"
			name="email"
			onChange={(e: React.SyntheticEvent) => {
				let target = e.target as HTMLInputElement;
				dispatch({
				    type: "SET_TEXT",
				    inputName: target.name,
				    value: target.value,
				});
			}}
			placeholder={"Email"}
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
			aria-label="Get Started"
			type="submit"
		    >
			Sign up
		    </Fab>
		</CreateAccountForm>
		<FooterContent>
		    <StyledLink to="/">{"Terms & Conditions"}</StyledLink>
		</FooterContent>
	    </SignupContent>
	</SignupWrapper>
    );
};

export { SignupSection };

/* <RoundedInputBox
 * icon={<AccountCircle color="inherit" />}
 * value={username}
 * type="text"
 * name="username"
 * onChange={(e: React.SyntheticEvent) => {
 *     let target = e.target as HTMLInputElement;
 *     dispatch({
 *         type: "SET_TEXT",
 *         inputName: target.name,
 *         value: target.value,
 *     });
 * }}
 * placeholder={"Username"}
 * className="input-box"
 * />*/