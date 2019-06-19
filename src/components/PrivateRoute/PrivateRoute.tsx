import React, { Component } from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute: React.FC = ({
  // @ts-ignore
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      props.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
