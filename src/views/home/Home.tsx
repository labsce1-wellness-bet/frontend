import React, { useState } from "react";
import {
  HomeWrapper,
  MainContent,
  HeaderContent,
  GetStartedForm,
} from "./HomeStyles";
import { Logo } from "./lib/assets/Logo";
import RoundedInputBox from "components/RoundedInputBox/RoundedInputBox";
import { AccountCircle, Lock } from "@material-ui/icons";
import Fab from "@material-ui/core/Fab";
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <HomeWrapper>
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
          <Fab color="primary" variant="extended" aria-label="Get Started">
            Get Started
          </Fab>
        </GetStartedForm>
      </MainContent>
    </HomeWrapper>
  );
};

export default Home;
