import * as React from "react";
import "./Location.scss";

export const Location = () => {
  return (
    <div>
      <section className="contact-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Location</h2>
                <p>Our headquarters</p>
              </div>
              <div className="cs-text">
                <div className="ct-address">
                  <span>Address:</span>
                  <p>
                    Km. 5 Av. Las Palmas, Antioquia <br />
                    Colombia
                  </p>
                </div>
                <ul>
                  <li>
                    <span>Phone:</span>
                    (+57)-322-277-0726
                  </li>
                  <li>
                    <span>Email:</span>
                    business@auroradevelopment.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52901.38789495531!2d-118.19465514866786!3d34.03523211493029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cf71ad83ff9f%3A0x518b28657f4543b7!2sEast%20Los%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1579763856144!5m2!1sen!2sbd"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
