import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from ".";

const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().user.role === 1 ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login-register",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
