import * as React from "react";
import Navigation from "./Navigation/Navigation";
import SoftwareHome from "../pages/software/SoftwareHome";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/style.css";
import ContactUs from "../pages/ContactUs/ContactUs";
import SoftwareView from "./SoftwareView/SoftwareView";
import Axios from "axios";
import { updateSoftwaresArray } from "../redux/software/softwareActions";
import { connect } from "react-redux";
import { SoftwareSchema } from "../redux/software/software";
import { Dispatch } from "redux";

class App extends React.Component<IProps> {
  async componentDidMount() {
    const response = await Axios.get("http://localhost:3500/softwares");
    this.props.updateSoftwaresArray(response.data.data);
  }

  render() {
    return (
      <Router>
        <Navigation />
        <div className="container-fluid p-5">
          <div className="row">
            <Route exact path="/software" component={SoftwareHome} />
            <Route
              exact
              path="/software/:softwareId"
              component={SoftwareView}
            />
            <Route path="/contact-us" component={ContactUs} />
          </div>
        </div>
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
