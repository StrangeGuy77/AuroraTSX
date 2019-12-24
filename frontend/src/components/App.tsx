import React, { Component } from "react";
import Navigation from "./assets/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />

        <Route />
      </Router>
    );
  }
}
