import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../../static/images/logo/isolated-layout.svg";
import "./HomeAbout.scss";
import { connect } from "react-redux";
import { getLanguage } from "../../../redux/language/LangSelector";
import GlobalState from "../../../redux/State";
import ILanguage from "../../../redux/language/Lang";

const HomeAbout: React.FC<IProps> = ({ language: { homePage } }) => {
  const {
    aboutAuroraTeam,
    aboutAuroraTeamContent,
    discoverNow,
    missionSpan,
    motivationSpan
  } = homePage;

  return (
    <div>
      <section className="home-about-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ha-pic">
                <ReactLogo />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ha-text">
                <h2>{aboutAuroraTeam}</h2>
                <p>{aboutAuroraTeamContent}</p>
                <ul>
                  <li>
                    <span className="icon_check"></span> {motivationSpan}
                  </li>
                  <li>
                    <span className="icon_check"></span> {missionSpan}
                  </li>
                </ul>
                <Link to="/contact-us" className="ha-btn">
                  {discoverNow}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(HomeAbout);

interface IProps {
  language: ILanguage;
}
