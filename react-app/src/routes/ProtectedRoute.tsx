import { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "../layouts/Navbar";
import NavbarMobo from "../layouts/NavbarMobo";

const ProtectedRoute = (props: any) => {
  const [loggedIn] = useState<boolean>(true);
  const { isLoggedIn, authToken } = props.auth;

  return (
    <>
      <Route
        {...props.routeParams}
        render={() =>
          localStorage.getItem("discord-auth") !== null ? (
            // Redirect to home page when authenticated
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          ) : (
            // Protected components to render when user not logged in
            <>{props.children}</>
          )
        }
      />
    </>
  );
};

// Function to map states to props
const mapStateToProps = (state: any, ownProps: any) => {
  return {
    auth: state.auth,
    location: ownProps.computedMatch.path,
    routeParams: {
      exact: ownProps.computedMatch.isExact,
      path: ownProps.computedMatch.path,
    },
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
