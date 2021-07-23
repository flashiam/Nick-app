import "./styles/App.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import General from "./general/General";
import Influencer from "./influencer/Influencer";
import InfluencerList from "./influencer/InfluencerList";
import GeneralList from "./general/GeneralList";
import SignIn from "./signin/SignInRoot";

import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/influencer" component={Influencer} />
        <PrivateRoute exact path="/general" component={General} />
        <PrivateRoute
          exact
          path="/influencer/songs"
          component={InfluencerList}
        />
        <PrivateRoute exact path="/general/artists" component={GeneralList} />
        <Route exact path="/sign_in" component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
