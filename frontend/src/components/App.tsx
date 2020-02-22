import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import SoftwareHome from "../pages/software/SoftwareHome";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <Route path="/software" component={SoftwareHome} />
      </Router>
    );
  }
}
