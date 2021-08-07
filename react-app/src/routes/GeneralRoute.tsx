import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "../layouts/Navbar";
import NavbarMobo from "../layouts/NavbarMobo";
import Footer from "../layouts/Footer";

const GeneralRoute = (props: any) => {
  const { userType } = props.auth;

  return (
    <>
      <NavbarMobo />
      <Navbar />
      <Route
        {...props.routeParams}
        render={() =>
          // Private components to render when user logged in
          localStorage.getItem("discord-auth") !== null ? (
            // Checking wether the user is a general user
            userType === "general" ? (
              <>{props.children}</>
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: props.location },
                }}
              />
            )
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
      <Footer />
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

export default connect(mapStateToProps, null)(GeneralRoute);
