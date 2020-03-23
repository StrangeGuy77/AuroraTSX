import * as React from "react";
import "./Pricing.scss";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Cover from "../../static/images/cover.png";

export const Pricing = () => {
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
                <h2>Ticket Pricing</h2>
                <p>Get your event ticket plan</p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="justify-content-center">
            <MDBCol lg="4" md="8">
              <div className="price-item">
                <h4>1 Day Pass</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>210
                  </h2>
                </div>
                <ul>
                  <li>Support priority 24/7</li>
                  <li>Advising whenever needed</li>
                  <li>Contact with our developers</li>
                  <li>Support with 2 projects.</li>
                </ul>
                <a href="#" className="price-btn">
                  Get Ticket <span className="arrow_right"></span>
                </a>
              </div>
            </MDBCol>
            <div className="col-lg-4 col-md-8">
              <div className="price-item top-rated">
                <div className="tr-tag">
                  <i className="fa fa-star"></i>
                </div>
                <h4>Full Pass</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>1200
                  </h2>
                </div>
                <ul>
                  <li>Support priority 24/7</li>
                  <li>Advising whenever needed</li>
                  <li>Contact with our developers</li>
                  <li>Contact with our CTO and Leads</li>
                  <li>Support with unlimited projects</li>
                  <li>
                    Reduced rate of distribution when software is published,
                    less than 3%
                  </li>
                </ul>
                <a href="#" className="price-btn">
                  Get Ticket <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="price-item">
                <h4>Group Pass</h4>
                <div className="pi-price">
                  <h2>
                    <span>$</span>500
                  </h2>
                </div>
                <ul>
                  <li>Support priority 24/7</li>
                  <li>Advising whenever needed</li>
                  <li>Contact with our developers</li>
                  <li>Support with 6 projects</li>
                  <li>Reduced rate of distribution less than 10%</li>
                </ul>
                <a href="#" className="price-btn">
                  Get Ticket <span className="arrow_right"></span>
                </a>
              </div>
            </div>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};
