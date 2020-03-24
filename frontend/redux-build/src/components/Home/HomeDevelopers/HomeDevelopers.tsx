import * as React from "react";
import TabPane from "./TabPanes/TabPane";
import "./HomeDevelopers.scss";
import { connect } from "react-redux";
import { getLanguage } from "../../../redux/language/LangSelector";
import GlobalState from "../../../redux/State";
import ILanguage from "../../../redux/language/Lang";

const HomeDevelopers: React.FC<IProps> = ({
  language: {
    homePage: { ourCeo }
  }
}) => {
  return (
    <div>
      <section className="schedule-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{ourCeo}</h2>
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

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(HomeDevelopers);

interface IProps {
  language: ILanguage;
}
