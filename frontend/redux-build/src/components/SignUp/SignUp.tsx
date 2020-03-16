import * as React from "react";
import { connect } from "react-redux";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";
import { MDBBtn } from "mdbreact";
import SignUpModal from "./SignUpModal";

class SignUp extends React.Component<IProps, IState> {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState((prevState: IState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { register } = this.props.language.sectionsInfo;
    return (
      <div>
        <li>
          <MDBBtn color="indigo" onClick={() => this.openModal()}>
            <i className="fas fa-user-plus">{register}</i>
          </MDBBtn>
          <SignUpModal isOpen={this.state.isOpen} toggler={this.openModal} />
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(SignUp);

interface IProps {
  language: ILanguage;
}

interface IState {
  isOpen: boolean;
}
