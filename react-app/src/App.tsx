import React from "react";
import "./styles/App.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import NavbarMobo from "./layouts/NavbarMobo";

import Home from "./home/Home";
import General from "./general/General";
import Influencer from "./influencer/Influencer";
import InfluencerList from "./influencer/InfluencerList";
import GeneralList from "./general/GeneralList";

function App() {
  return (
    <Router>
      <Navbar />
      <NavbarMobo />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/influencer" component={Influencer} />
        <Route exact path="/general" component={General} />
        <Route exact path="/influencer/songs" component={InfluencerList} />
        <Route exact path="/general/artists" component={GeneralList} />
      </Switch>
    </Router>
  );
}

export default App;
