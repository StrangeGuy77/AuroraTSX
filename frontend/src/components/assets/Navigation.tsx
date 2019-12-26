import React, { Component } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../images/80.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand-lg text-dark">
          <Link to="/" className="navbar-logo text-white">
            <img src={BrandLogo} alt="" className="" />{" "}
            <h4 className="navbar-brand ml-4"> Aurora Development</h4>
          </Link>
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto ml-3">
                <li className="nav-item active">
                  <Link className="nav-link text-white" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/software">
                    Software
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/library">
                    Library
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/our-services">
                    Our Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact-us">
                    Contact us
                  </Link>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-light mr-sm-2">
                  Signup
                </button>
                <button className="btn btn-outline-light my-2 my-sm-0">
                  Signin
                </button>
              </div>
            </div>
          </div>
        </nav>
        <hr className="nav-hr mt-0" />
      </div>
    );
  }
}
