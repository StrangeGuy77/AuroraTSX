import * as React from "react";
import "./SoftwareHomeStyles.scss";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import SoftwareList from "../../components/SoftwareList/SoftwareList";
import SoftwareForm from "../../components/SoftwareForm/SoftwareForm";
import { SoftwareSchema } from "../../redux/software/software";

class SoftwareHome extends React.Component<IProps, SoftwareSchema> {
  render() {
    return (
      <div className="container-fluid p4">
        <div className="row">
          <div className="col-md-8">
            <SoftwareForm />
            <SoftwareList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(SoftwareHome);

interface IProps {
  language: ILanguage;
}
