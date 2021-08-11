// import {useEffect} from '../'
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "../layouts/Navbar";
import NavbarMobo from "../layouts/NavbarMobo";

const PrivateRoute = (props: any) => {
  // const {userType} = props.auth;
  return (
    <>
      <NavbarMobo />
      <Navbar />
      <Route
        {...props.routeParams}
        render={() =>
          localStorage.getItem("discord-auth") !== null ? (
            // Private components to render when user logged in
            <>{props.children}</>
          ) : (
            // Redirect to sign in page when unauthenticated
            <Redirect
              to={{
                pathname: "/sign_in",
                state: { from: props.location },
              }}
            />
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

export default connect(mapStateToProps, null)(PrivateRoute);
