import * as React from 'react';
import Navigation from "./Navigation/Navigation";
import SoftwareHome from "../pages/software/SoftwareHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import '../css/style.css';
import ContactUs from '../pages/ContactUs/ContactUs';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid p-5">
          <div className="row">
            <Route path="/software" component={SoftwareHome} />
            <Route path="/contact-us" component={ContactUs} />
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
