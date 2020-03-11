import * as React from "react";
import "./SoftwareHomeStyles.scss";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import SoftwareList from "../../components/SoftwareList/SoftwareList";
import SoftwareForm from "../../components/SoftwareForm/SoftwareForm";
import { SoftwareSchema } from "../../redux/software/software";
import Axios from "axios";
import { updateSoftwaresArray } from "../../redux/software/softwareActions";
import { Dispatch } from "redux";

class SoftwareHome extends React.Component<IProps, SoftwareSchema> {
  async componentDidMount() {
    const response = await Axios.get("http://localhost:3500/softwares");
    this.props.updateSoftwaresArray(response.data.data);
  }

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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateSoftwaresArray: (software: SoftwareSchema[]) =>
    dispatch(updateSoftwaresArray(software))
});

export default connect(mapStateToProps, mapDispatchToProps)(SoftwareHome);

interface IProps {
  language: ILanguage;
  updateSoftwaresArray: (software: SoftwareSchema[]) => any;
}
