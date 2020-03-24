import * as React from "react";
import "./Pricing.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Cover from "../../static/images/cover.png";
import { connect } from "react-redux";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";

const Pricing: React.FC<IProps> = ({ language }) => {
  const {
    getYourSubscriptionPlan,
    juniorSubscription,
    midSubscription,
    seniorSubscription,
    getSubscription,
    supportPriority,
    SupportWith,
    advisingWhenNeeded,
    projects,
    unlimited,
    contactWithCTO,
    contactWithOurDevs,
    reducedRateOfInterest
  } = language.ourServicesSection;

  return (
    <div className="mt-5 p-1">
      <section
        className="pricing-section set-bg spad"
        style={{
          backgroundImage: `url(${Cover})`
        }}
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="12">
              <div className="section-title">
                <p>{getYourSubscriptionPlan}</p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol lg="4" md="8">
              <div className="price-item">
                <h4>{juniorSubscription}</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>210
                  </h2>
                </div>
                <ul>
                  <li>{supportPriority} 24/7</li>
                  <li>{advisingWhenNeeded}</li>
                  <li>{contactWithOurDevs}</li>
                  <li>
                    {SupportWith} 2 {projects}.
                  </li>
                </ul>
                <a href="#" className="price-btn">
                  {getSubscription} <span className="arrow_right"></span>
                </a>
              </div>
            </MDBCol>
            <div className="col-lg-4 col-md-8">
              <div className="price-item top-rated">
                <div className="tr-tag">
                  <i className="fa fa-star"></i>
                </div>
                <h4>{seniorSubscription}</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>1200
                  </h2>
                </div>
                <ul>
                  <li>{supportPriority} 24/7</li>
                  <li>{advisingWhenNeeded}</li>
                  <li>{contactWithOurDevs}</li>
                  <li>
                    {SupportWith} {unlimited} {projects}.
                  </li>
                  <li>{contactWithCTO}</li>
                  <li>{reducedRateOfInterest} 3%</li>
                </ul>
                <a href="#" className="price-btn">
                  {getSubscription} <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="price-item">
                <h4>{midSubscription}</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>500
                  </h2>
                </div>
                <ul>
                  <li>{supportPriority} 24/7</li>
                  <li>{advisingWhenNeeded}</li>
                  <li>{contactWithOurDevs}</li>
                  <li>
                    {SupportWith} 6 {projects}.
                  </li>
                  <li>{reducedRateOfInterest} 10%</li>
                </ul>
                <a href="#" className="price-btn">
                  {getSubscription} <span className="arrow_right"></span>
                </a>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(Pricing);

interface IProps {
  language: ILanguage;
}
