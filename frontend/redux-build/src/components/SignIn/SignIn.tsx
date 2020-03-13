import * as React from "react";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import { connect } from "react-redux";
import SignInModal from "./SignInModal";
import { MDBBtn } from "mdbreact";

class SignIn extends React.Component<IProps, IState> {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState((prevState: IState) => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    const { login } = this.props.language.sectionsInfo;
    return (
      <div>
        <li className="login-sec">
          <MDBBtn color="indigo" onClick={() => this.openModal()}>
            <i className="fas fa-user"> {login}</i>
          </MDBBtn>
          <SignInModal isOpen={this.state.isOpen} toggler={this.openModal} />
        </li>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(SignIn);

interface IProps {
  language: ILanguage;
}

interface IState {
  isOpen: boolean;
}
