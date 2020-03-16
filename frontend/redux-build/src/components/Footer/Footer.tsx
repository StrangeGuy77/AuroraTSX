import * as React from "react";
import { connect } from "react-redux";
import ILanguage from "../../redux/language/Lang";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import { Link } from "react-router-dom";
import BrandLogo from "../../static/images/80.png";
import "./Footer.scss";

const Footer: React.FC<IProps> = ({ language: { sectionsInfo } }) => {
  const {
    home,
    library,
    foro,
    ourServices,
    contactUs,
    software,
    aboutAurora,
    aboutAuroraContent
  } = sectionsInfo;

  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <img src={BrandLogo} alt="" /> Aurora Development
          </h3>

          <p className="footer-links">
            <Link to="/" className="nav-link">
              {home}
            </Link>
            .
            <Link to="/library" className="nav-link">
              {library}
            </Link>
            .
            <Link to="/software" className="nav-link">
              {software}
            </Link>
            .
            <Link to="/forum" className="nav-link">
              {foro}
            </Link>
            .
            <Link to="/our-services" className="nav-link">
              {ourServices}
            </Link>
            .
            <Link to="/contact-us" className="nav-link">
              {contactUs}
            </Link>
          </p>

          <p className="footer-company-name">Aurora Development &copy; 2019</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Km. 5 Av. Las Palmas</span> Medellín, Colombia
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+57 322 277 0726</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:contact@aurorahostsite.com">
                contact@auroradevelopment.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>{aboutAurora}</span>
            {aboutAuroraContent}
          </p>

          <div className="footer-icons">
            <a href="https://www.facebook.com/auroradevproject/">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/AuroraDevelopm1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/jhonatan-restrepo-garz%C3%B3n-485a30152/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/StrangeGuy77/">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(Footer);

interface IProps {
  language: ILanguage;
}
