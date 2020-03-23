import * as React from "react";
import Navigation from "./Navigation/Navigation";
import SoftwareHome from "../pages/software/SoftwareHome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/style.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactUs from "../pages/ContactUs/ContactUs";
import SoftwareView from "./SoftwareView/SoftwareView";
import Axios from "axios";
import { updateSoftwaresArray } from "../redux/software/softwareActions";
import { connect } from "react-redux";
import { SoftwareSchema } from "../redux/software/software";
import { Dispatch } from "redux";
import SignInCard from "./SignIn/SignInModal";
import Footer from "./Footer/Footer";
import Profile from "../pages/Profile/Profile";
import OurServices from "../pages/OurServices/OurServices";
import ErrorComponent from "./Error/Error";
import HomePage from "../pages/Home/HomePage";

class App extends React.Component<IProps> {
  async componentDidMount () {
    const response = await Axios.get("http://localhost:3500/softwares");
    this.props.updateSoftwaresArray(response.data.data);
  }

  render () {
    return (
      <Router>
        <Navigation />

        <div className="container-fluid p-5">
          <Switch >
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInCard} />

            <Route exact path="/software" component={SoftwareHome} />
            <Route exact path="/software/:softwareId" component={SoftwareView} />

            <Route path="/contact-us" component={ContactUs} />
            <Route path="/our-services" component={OurServices} />
            <Route exact path="/user/:username" component={Profile} />

            <Route component={ErrorComponent} />

          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateSoftwaresArray: (software: SoftwareSchema[]) =>
    dispatch(updateSoftwaresArray(software))
});

export default connect(null, mapDispatchToProps)(App);

interface IProps {
  updateSoftwaresArray: (software: SoftwareSchema[]) => any;
}
