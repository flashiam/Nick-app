import "./styles/App.min.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./home/Home";
import General from "./general/General";
import Influencer from "./influencer/Influencer";
import InfluencerList from "./influencer/InfluencerList";
import GeneralList from "./general/GeneralList";
import SignIn from "./signin/SignInRoot";
import SaveSpotify from "./signin/SaveSpotify";

import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import InfluencerRoute from "./routes/InfluencerRoute";
import GeneralRoute from "./routes/GeneralRoute";

import store from "./store";
import SaveDiscord from "./signin/SaveDiscord";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <InfluencerRoute exact path="/influencer">
            <Influencer />
          </InfluencerRoute>
          <GeneralRoute exact path="/general">
            <General />
          </GeneralRoute>
          <InfluencerRoute exact path="/influencer/songs">
            <InfluencerList />
          </InfluencerRoute>
          <GeneralRoute exact path="/general/artists">
            <GeneralList />
          </GeneralRoute>
          <PrivateRoute exact path="/spotify_auth">
            <SaveSpotify />
          </PrivateRoute>
          <ProtectedRoute exact path="/discord_signup">
            <SaveDiscord />
          </ProtectedRoute>
          <ProtectedRoute exact path="/sign_in">
            <SignIn />
          </ProtectedRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
