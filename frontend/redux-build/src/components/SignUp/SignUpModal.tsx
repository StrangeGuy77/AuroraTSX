import * as React from "react";
import {
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from "mdbreact";
import { RouteComponentProps, withRouter, Link } from "react-router-dom";
import ILanguage from "../../redux/language/Lang";
import IUser from "../../redux/user/user";
import { connect } from "react-redux";
import { getLanguage } from "../../redux/language/LangSelector";
import { setCurrentUser } from "../../redux/user/userActions";
import GlobalState from "../../redux/State";
import { Dispatch } from "redux";
import Axios from "axios";

class SignUpModal extends React.Component<IProps, IState> {
  state = {
    isOpen: false,
    email: "",
    password: "",
    signUpErrors: "",
    signUpErrorsColor: "#ff0000",
    username: "",
    confirmPassword: ""
  };

  handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState((prevState: IState) => ({
      ...prevState,
      [name]: value
    }));
  };

  signUpEvent = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword, username } = this.state;
    const { setCurrentUser } = this.props;
    const {
      passwordDoesntMatch,
      youMustConfirmYourPassword,
      youMustEnterAPassword,
      youMustEnterAnEmail,
      youMustEnterAnUser
    } = this.props.language.signUpInfo;

    if (username === "") {
      this.setState({
        signUpErrors: youMustEnterAnUser
      });
    } else {
      if (email === "") {
        this.setState({
          signUpErrors: youMustEnterAnEmail
        });
      } else {
        if (password === "") {
          this.setState({
            signUpErrors: youMustEnterAPassword
          });
        } else {
          if (confirmPassword === "") {
            this.setState({
              signUpErrors: youMustConfirmYourPassword
            });
          } else {
            if (password !== confirmPassword) {
              this.setState({
                signUpErrors: passwordDoesntMatch
              });
            } else {
              try {
                const response:
                  | IUser
                  | Promise<IUser>
                  | null
                  | any = JSON.parse(
                  JSON.stringify(
                    await Axios.post(`http://localhost:3500/user`, {
                      email,
                      password,
                      username
                    })
                  )
                );
                if (response.data.code === 200) {
                  setCurrentUser(response.data.newUser as IUser);
                  this.setState({
                    signUpErrors: response.data.message,
                    signUpErrorsColor: "#4BB543"
                  });
                  setTimeout(() => {
                    this.props.toggler();
                    this.setState({
                      signUpErrors: ""
                    });
                  }, 2000);
                } else {
                  this.setState({
                    signUpErrors: response.data.message
                  });
                }
              } catch (error) {
                this.setState({
                  signUpErrors: `There was a problem sending data to the server: ${error}`
                });
              }
            }
          }
        }
      }
    }
  };

  render() {
    const { register, cancel } = this.props.language.sectionsInfo;
    const {
      email,
      password,
      username,
      confirmPassword,
      onceRegisteredAgreementAccepted
    } = this.props.language.userInfo;
    const { userAgreementModal } = this.props.language.userAgreementPolicy;
    return (
      <MDBModal
        isOpen={this.props.isOpen as boolean}
        toggle={this.props.toggler}
      >
        <MDBModalHeader toggle={this.props.toggler}>
          <div className="h5-responsive modal-title">{register}</div>
        </MDBModalHeader>
        <MDBModalBody>
          <MDBInput
            label={username}
            icon="user"
            name="username"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.handleInput(e)
            }
          />
          <MDBInput
            label={email}
            icon="envelope"
            name="email"
            group
            type="email"
            validate
            error="wrong"
            success="right"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.handleInput(e)
            }
          />
          <MDBInput
            label={password}
            icon="lock"
            name="password"
            group
            type="password"
            validate
            error="wrong"
            success="right"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.handleInput(e)
            }
          />
          <MDBInput
            label={confirmPassword}
            icon="exclamation-triangle"
            name="confirmPassword"
            group
            type="password"
            validate
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.handleInput(e)
            }
          />
        </MDBModalBody>
        <div className="input-group mb-3 ">
          <div className="text-right">
            <p style={{ color: this.state.signUpErrorsColor }}>
              {this.state.signUpErrors}
            </p>
            <p>
              {onceRegisteredAgreementAccepted}
              <Link to="/signup">{userAgreementModal}</Link>
            </p>
          </div>
        </div>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.props.toggler}>
            {cancel}
          </MDBBtn>
          <MDBBtn
            color="primary"
            type="submit"
            onClick={e => this.signUpEvent(e)}
          >
            {register}
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
  connect(mapStateToProps, mapDispatchToProps)(SignUpModal)
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
  confirmPassword: string;
  username: string;
  signUpErrors: string | null;
  signUpErrorsColor: string;
}
