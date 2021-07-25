import { useState } from "react";
import { Route, Redirect } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import NavbarMobo from "../layouts/NavbarMobo";

// type Props = {
//   component: Function;

// };

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const [loggedIn] = useState<boolean>(false);

  return (
    <>
      <NavbarMobo />
      <Navbar />
      <Route
        {...rest}
        render={props =>
          loggedIn ? 
          <Component {...props} /> : 
          <Redirect to="/sign_in" />
        }
      />
    </>
  );
};

export default PrivateRoute;
