import React from "react";
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
export interface Props {
    state: AuthState;
    dispatch: Function;
}

const LoginSection: React.SFC<Props> = ({ state, dispatch }) => {
    const { email, password } = state;
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
		    onSubmit={(e: React.SyntheticEvent) => {
			    e.preventDefault();
			    //TODO: When submitting it should do an axios request to login
		    }}>
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
