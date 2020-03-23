import * as React from "react";
import TabPane from "./TabPanes/TabPane";
import "./HomeDevelopers.scss";

export const HomeDevelopers = () => {
  return (
    <div>
      <section className="schedule-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Our CEO</h2>
                <p>Do not miss annything about our team!</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="schedule-tab">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <TabPane
                    email="jhonatanrg@live.com"
                    title="Chief Technological Officer"
                    name="Jhonatan Restrepo"
                    location="Calle 30 #69-17"
                    schedule="7:30 am - 6:00 pm"
                    img="null"
                  />
                  <TabPane
                    email="percy100@gmail.com"
                    title="Lead Senior Frontend Engineer"
                    name="Juan David Ríos"
                    location="Carrera 69 #69-69"
                    schedule="7:30 am - 6:00 pm"
                    img="null"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
