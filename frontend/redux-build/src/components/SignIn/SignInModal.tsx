import * as React from "react";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCurrentUser } from "../../redux/user/userActions";
import IUser from "../../redux/user/user";
import Axios from "axios";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBBtn,
  MDBInput
} from "mdbreact";

class SignInModal extends React.Component<IProps, IState> {
  state = {
    isOpen: false,
    email: "",
    password: "",
    signInErrors: "",
    signInErrorsColor: "#ff0000",
    fadeOut: "",
    dataDismiss: ""
  };

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState((prevState: IState) => ({
      ...prevState,
      [name]: value
    }));
  };

  signInEvent = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { setCurrentUser } = this.props;

    try {
      const response: IUser | Promise<IUser> | null | any = JSON.parse(
        JSON.stringify(
          await Axios.post(`http://localhost:3500/user/login`, {
            email,
            password
          })
        )
      );
      if (response.data.code === 200) {
        setCurrentUser(response.data.userData as IUser);
        this.setState({
          signInErrors: response.data.message,
          signInErrorsColor: "#4BB543"
        });
        setTimeout(() => {
          this.props.toggler();
          this.setState({
            signInErrors: ""
          });
        }, 1300);
      } else {
        this.setState({
          signInErrors: response.data.message
        });
      }
    } catch (error) {
      this.setState({
        signInErrors: `There was a problem sending data to the server: ${error}`
      });
    }
  };

  render() {
    const { login, cancel } = this.props.language.sectionsInfo;
    const {
      email,
      password,
      NotRegisteredYet,
      SignUpHere
    } = this.props.language.userInfo;
    return (
      <MDBModal
        isOpen={this.props.isOpen as boolean}
        toggle={this.props.toggler}
      >
        <MDBModalHeader toggle={this.props.toggler}>
          <div className="h5-responsive modal-title">{login}</div>
        </MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            label={email}
            icon="fas fa-at"
            name="email"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.handleInput(e)
            }
          />
          <MDBInput
            type="password"
            label={password}
            name="password"
            icon="fas fa-key"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.handleInput(e)
            }
          />
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <p
                style={{ color: this.state.signInErrorsColor }}
                id="login-alert-section"
              >
                {this.state.signInErrors}
              </p>
              <hr />
            </div>
            <p>
              {NotRegisteredYet}
              <Link to="/signup">{SignUpHere}</Link>
            </p>
          </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.props.toggler}>
            {cancel}
          </MDBBtn>
          <MDBBtn
            color="primary"
            type="submit"
            onClick={(e: React.FormEvent<HTMLButtonElement>) =>
              this.signInEvent(e)
            }
          >
            {login}
          </MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignInModal)
);

interface IProps extends RouteComponentProps {
  language: ILanguage;
  setCurrentUser: (user: IUser) => any;
  isOpen: boolean;
  toggler: () => any;
}

interface IState {
  isOpen: boolean | string;
  email: string;
  password: string;
  signInErrors: string | null;
  signInErrorsColor: string;
  fadeOut: string;
  dataDismiss: string;
}
