import * as React from "react";
import { connect } from "react-redux";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";
import "./OurServices.scss";
import { Pricing } from "../../components/Pricing/Pricing";

const OurServices: React.FC<IProps> = ({ language }) => {
  const {
    WebDesigns,
    WebDesignsDesc,
    WebDevelopment,
    WebDevelopmentDesc,
    ResponsiveDesigns,
    ResponsiveDesignsDesc,
    Consulting,
    ConsultingDesc,
    AndroidIOS,
    AndroidIOSDesc,
    Databases,
    DatabasesDesc
  } = language.ourServicesSection;

  const { ourServices } = language.sectionsInfo;

  return (
    <div>
      <div className="p-4 mb-5">
        <div className="dark-overlay">
          <div className="services-section">
            <h1 className="section-title p-5">{ourServices}</h1>
            <div className="services-container p-5 mb-5">
              <div className="service-box p-5 mb-5">
                <div className="service-icon">
                  <i className="fas fa-paint-brush"></i>
                </div>
                <div className="service-title">{WebDesigns}</div>
                <div className="service-desc">{WebDesignsDesc}</div>
              </div>

              <div className="service-box p-5 mb-5">
                <div className="service-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="service-title">{WebDevelopment}</div>
                <div className="service-desc">{WebDevelopmentDesc}</div>
              </div>

              <div className="service-box p-5 mb-5">
                <div className="service-icon">
                  <i className="fas fa-brush"></i>
                </div>
                <div className="service-title">{ResponsiveDesigns}</div>
                <div className="service-desc">{ResponsiveDesignsDesc}</div>
              </div>

              <div className="service-box p-5 mb-5">
                <div className="service-icon">
                  <i className="fas fa-object-ungroup"></i>
                </div>
                <div className="service-title">{Consulting}</div>
                <div className="service-desc">{ConsultingDesc}</div>
              </div>

              <div className="service-box p-5 mb-5">
                <div className="service-icon">
                  <i className="fas fa-database"></i>
                </div>
                <div className="service-title">{Databases}</div>
                <div className="service-desc">{DatabasesDesc}</div>
              </div>

              <div className="service-box p-5 mb-5">
                <div className="service-icon">
                  <i className="fab fa-android"></i>
                </div>
                <div className="service-title">{AndroidIOS}</div>
                <div className="service-desc">{AndroidIOSDesc}</div>
              </div>
            </div>
          </div>
        </div>
        <Pricing />
      </div>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(OurServices);

interface IProps {
  language: ILanguage;
}
