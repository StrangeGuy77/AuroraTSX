import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ReactLogo } from "../../../static/images/logo/isolated-layout.svg";
import "./HomeAbout.scss";

export const HomeAbout = () => {
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
                <h2>About Conference</h2>
                <p>
                  When I first got into the online advertising business, I was
                  looking for the magical combination that would put my website
                  into the top search engine rankings, catapult me to the
                  forefront of the minds or individuals looking to buy my
                  product, and generally make me rich beyond my wildest dreams!
                  After succeeding in the business for this long, I’m able to
                  look back on my old self with this kind of thinking and shake
                  my head.
                </p>
                <ul>
                  <li>
                    <span className="icon_check"></span> Write On Your Business
                    Card
                  </li>
                  <li>
                    <span className="icon_check"></span> Advertising Outdoors
                  </li>
                  <li>
                    <span className="icon_check"></span> Effective Advertising
                    Pointers
                  </li>
                  <li>
                    <span className="icon_check"></span> Kook 2 Directory Add
                    Url Free
                  </li>
                </ul>
                <Link to="/contact-us" className="ha-btn">
                  Discover Now
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
