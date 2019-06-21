import React, { useState, useContext } from "react";
import { Route, Redirect } from "react-router";
import { GlobalContext } from "GlobalContext/GlobalContext";
interface PrivateRouteProps {
  path: string;
  component: React.FC;
  exact?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}: any) => {
  const global: { isAuthenticated?: boolean } = useContext(GlobalContext);

  return (
    <Route
      {...rest}
      render={props =>
        global.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
