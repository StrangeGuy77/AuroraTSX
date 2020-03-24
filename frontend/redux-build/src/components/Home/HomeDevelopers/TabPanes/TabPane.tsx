import * as React from "react";
import { ReactComponent as AuroraLogo } from "../../../../static/images/logo/isolated-monochrome-black.svg";

const TabPane: React.FC<IProps> = ({
  title,
  name,
  email,
  schedule,
  location
}) => {
  return (
    <div>
      <div className="st-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="sc-pic">
                <AuroraLogo />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="sc-text">
                <h4>{title}</h4>
                <ul>
                  <li>
                    <i className="fa fa-user"></i> {name}
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> {email}
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="sc-widget">
                <li>
                  <i className="fa fa-clock-o"></i> {schedule}
                </li>
                <li>
                  <i className="fa fa-map-marker"></i> {location}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPane;

interface IProps {
  title: string;
  name: string;
  email: string;
  img: any;
  schedule: string;
  location: string;
}
