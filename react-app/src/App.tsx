import "./styles/App.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path="/influencer">
            <Influencer />
          </PrivateRoute>
          <PrivateRoute exact path="/general">
            <General />
          </PrivateRoute>
          <PrivateRoute exact path="/influencer/songs">
            <InfluencerList />
          </PrivateRoute>
          <PrivateRoute exact path="/general/artists">
            <GeneralList />
          </PrivateRoute>
          {/* <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/influencer" component={Influencer} />
          <PrivateRoute exact path="/general" component={General} /> */}
          <PrivateRoute exact path="/spotify_auth">
            <SaveSpotify />
          </PrivateRoute>
          {/* <PrivateRoute exact path="/spotify_auth" component={SaveSpotify} /> */}
          {/* <PrivateRoute
            exact
            path="/influencer/songs"
            component={InfluencerList}
          />
          <PrivateRoute exact path="/general/artists" component={GeneralList} /> */}
          <ProtectedRoute exact path="/sign_in">
            <SignIn />
          </ProtectedRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
