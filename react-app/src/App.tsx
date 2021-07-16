import React from "react";
import "./styles/App.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Home from "./home/Home";
import General from "./general/General";
import Influencer from "./influencer/Influencer";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/influencer" component={Influencer} />
          <Route exact path="/general" component={General} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
