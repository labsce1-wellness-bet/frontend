import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router";
import {
  GlobalContext,
  useGlobalContextValue,
} from "GlobalContext/GlobalContext";
import { useUserContextValue } from "GlobalContext/_UserContext";
import Auth from "Auth/Auth";
interface Props {
  path: string;
  component: React.FC;
  exact?: boolean;
}

const PrivateRoute: React.FC<Props> = ({
  component: Component,
  ...rest
}: any) => {
  const [state, dispatch] = useGlobalContextValue();
  const [userState, userDispatch] = useUserContextValue();

  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
