import * as React from "react";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { signIn } from "../../redux/user/userActions";

class SignInModal extends React.Component<IProps, IState> {
  state = {
    openRegisterModal: false,
    email: "",
    password: ""
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    const { signIn } = this.props;
    await signIn(email, password);
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
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md-2" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">
                {login}
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-at"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={email}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      this.handleInput(e)
                    }
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-key"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder={password}
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      name="password"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        this.handleInput(e)
                      }
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <p
                        style={{ color: "#ff0000" }}
                        id="login-alert-section"
                      ></p>
                      <hr />
                    </div>
                  </div>
                  <p>
                    {NotRegisteredYet}
                    <a
                      onClick={() =>
                        this.setState((prevState: IState) => {
                          return {
                            openRegisterModal: !prevState.openRegisterModal
                          };
                        })
                      }
                    >
                      {SignUpHere}
                      {this.state.openRegisterModal ? (
                        <React.Fragment>
                          {/* Render signup modal */}
                        </React.Fragment>
                      ) : null}
                    </a>
                  </p>
                </div>
              </div>
              <div className="modal-foote">
                <button className="btn btn-secondary" data-dismiss="modal">
                  {cancel}
                </button>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                    this.signInEvent(e)
                  }
                >
                  {login}
                </button>
              </div>
            </div>
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
  signIn: (email: string, password: string) => dispatch(signIn(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInModal);

interface IProps {
  language: ILanguage;
  signIn: (email: string, password: string) => any;
}

interface IState {
  openRegisterModal: boolean | string;
  email: string;
  password: string;
}
