import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const { component: Component, needLogin, ...rest } = props;

  if (props.isNotLoggedIn === true) {
    return <Redirect to="/login" />;
  }
  return <Route {...rest} render={() => <Component {...rest} />} />;
};

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.isNotLoggedIn !== false ? (
        <Redirect to="/" />
      ) : (
        <Component {...props} />
      )
    }
  />
);
