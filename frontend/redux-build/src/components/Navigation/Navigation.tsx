import * as React from "react";
import "./NavigationStyles.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import BrandLogo from "../../static/images/80.png";
import CustomButton from "../CustomButton/CustomButton";
import { Dispatch } from "redux";
import ILanguage from "../../redux/language/Lang";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import { changeLanguage } from "../../redux/language/LangActions";
import { selectCurrentUser } from "../../redux/user/userSelector";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { isEmpty } from "../../utils/utils";
import ProfileButton from "../ProfileButton/ProfileButton";

const Navigation: React.FC<IProps> = ({
  selectLanguage,
  language: { sectionsInfo },
  user,
}) => {
  const { home, ourServices, software, contactUs } = sectionsInfo;
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark nav-color">
        <div className="row">
          <Link to="/" className="navbar-brand">
            <img src={BrandLogo} alt="" />
            <p>Aurora Development</p>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {home}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/software" className="nav-link">
                {software}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/our-services" className="nav-link">
                {ourServices}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact-us" className="nav-link">
                {contactUs}
              </Link>
            </li>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto nav-item">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-dark dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    {" "}
                    <i className="fas fa-language"></i>
                    {""}
                  </button>
                  <div className="dropdown-menu">
                    <CustomButton
                      name="es"
                      onClickHandler={selectLanguage}
                      className="dropdown-item"
                    >
                      <i className="fas fa-globe-americas"></i> Español
                    </CustomButton>
                    <CustomButton
                      name="en"
                      onClickHandler={selectLanguage}
                      className="dropdown-item"
                    >
                      <i className="fas fa-globe-americas"></i> English
                    </CustomButton>
                    <CustomButton
                      name="de"
                      onClickHandler={selectLanguage}
                      className="dropdown-item"
                    >
                      <i className="fas fa-globe-europe"></i> Deutsch
                    </CustomButton>
                    <CustomButton
                      name="fr"
                      onClickHandler={selectLanguage}
                      className="dropdown-item"
                    >
                      <i className="fas fa-globe-europe"></i> Francais
                    </CustomButton>
                    <CustomButton
                      name="it"
                      onClickHandler={selectLanguage}
                      className="dropdown-item"
                    >
                      <i className="fas fa-globe-europe"></i> Italiano
                    </CustomButton>
                    <CustomButton
                      name="jp"
                      onClickHandler={selectLanguage}
                      className="dropdown-item"
                    >
                      <i className="fas fa-globe-asia"></i> 日本語
                    </CustomButton>
                  </div>
                </div>
              </ul>
            </div>
          </ul>
          {isEmpty(user) ? (
            <React.Fragment>
              <SignIn />
              <SignUp />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <ProfileButton />
            </React.Fragment>
          )}
        </div>
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  selectLanguage: (language: string) => dispatch(changeLanguage(language)),
});

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  user: selectCurrentUser(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

interface IProps {
  language: ILanguage;
  user: any;
  selectLanguage: (language: string) => any;
}
