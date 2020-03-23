import * as React from "react";
import "./Countdown.scss";

const Countdown = () => {
  return (
    <div>
      <section className="counter-section bg-gradient">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="counter-text">
                <span>Conference Date</span>
                <h3>
                  Count Every Second <br />
                  Until the Event
                </h3>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="cd-timer" id="countdown">
                <div className="cd-item">
                  <span>40</span>
                  <p>Days</p>
                </div>
                <div className="cd-item">
                  <span>18</span>
                  <p>Hours</p>
                </div>
                <div className="cd-item">
                  <span>46</span>
                  <p>Minutes</p>
                </div>
                <div className="cd-item">
                  <span>32</span>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countdown;
