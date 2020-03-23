import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import "./HomePage.scss";
import Hero from "../../static/images/cover.png";
import Logo from "../../static/images/LogoAuroraDev1.0.png";
import Countdown from "../../components/Home/Countdown/Countdown";
import { HomeAbout } from "../../components/Home/HomeAbout/HomeAbout";
import { HomeDevelopers } from "../../components/Home/HomeDevelopers/HomeDevelopers";

class HomePage extends React.Component<any> {
  render() {
    return (
      <div>
        <section
          className="hero-section set-bg"
          style={{
            backgroundImage: `url(${Hero})`
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-text">
                  <span>5 to 9 may 2019, mardavall hotel, New York</span>
                  <h2>
                    Never stop
                    <br /> advancing in mind develop
                  </h2>
                </div>
              </div>
              <div className="col-lg-5">
                <img src={Logo} alt="" />>
              </div>
            </div>
          </div>
        </section>
        <Countdown />
        <HomeAbout />
        <HomeDevelopers />
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(HomePage);
