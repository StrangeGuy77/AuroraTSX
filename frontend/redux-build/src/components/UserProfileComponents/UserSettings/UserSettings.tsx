import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../../redux/State";
import { getLanguage } from "../../../redux/language/LangSelector";
import { MDBInput, MDBBtn, MDBInputGroup } from "mdbreact";
import ILanguage from "../../../redux/language/Lang";
import IUser from "../../../redux/user/user";
import Axios from "axios";

class UserSettings extends React.Component<IProps, IState> {
  state = {
    UserForm: {},
    settingsWarning: ""
  };

  changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.currentTarget;
    this.setState(({ UserForm }: IState) => ({
      UserForm: {
        ...UserForm,
        [name]: value
      }
    }));
  };

  submitSettingsChange = async () => {
    const { password, confirmPassword, email } = this.state
      .UserForm as UserSettingsState;

    if (
      (password !== undefined || confirmPassword !== undefined) &&
      password !== confirmPassword
    ) {
      this.setState({
        settingsWarning:
          "If you're going to change your password you must be sure for them to match or if not, just leave the fields empty."
      });
      return;
    }
    const emailPattern = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if (email !== undefined) {
      if (!emailPattern.test(email)) {
        this.setState({
          settingsWarning:
            "The email you're trying to send doesn't meet an email properties. Check for something like 'test@test.com'"
        });
        return;
      }
    }
    this.setState({
      settingsWarning: ""
    });
    const bodyForBackend = this.state.UserForm;
    const { data } = await Axios.post(
      `http://localhost:3500/user/update?username=${this.props.user.username}`,
      bodyForBackend
    );
    if (data) {
    } else {
      this.setState({
        settingsWarning: "There was an error sending information to the server."
      });
    }
  };

  render() {
    const {
      FirstName,
      Lastname,
      cellphone,
      WorkSite,
      Enterprise,
      ChangePassword,
      Country,
      confirmPassword,
      YourGithub,
      YourWebPage,
      SaveSettings,
      ShowPublicEmail,
      ShowPublicLocation,
      ShowPublicName
    } = this.props.language.userInfo;

    const { signEmail } = this.props.language.softwareInfo;

    return (
      <div>
        {this.props.user ? (
          <React.Fragment>
            <div>
              <hr />
              <MDBInput
                icon="fas fa-address-card"
                type="text"
                label={FirstName}
                name="firstname"
                onInput={e => this.changeHandler(e)}
              />
              <MDBInput
                icon="far fa-address-card"
                type="text"
                name="name"
                label={Lastname}
                onInput={e => this.changeHandler(e)}
              />

              <MDBInput
                name="email"
                onInput={e => this.changeHandler(e)}
                icon="fas fa-envelope"
                type="text"
                label={signEmail}
              />
              <MDBInput
                icon="fas fa-mobile-alt"
                type="text"
                label={cellphone}
                name="cellphone"
                onInput={e => this.changeHandler(e)}
              />
              <MDBInput
                name="worksite"
                icon="fas fa-briefcase"
                type="text"
                label={WorkSite}
                onInput={e => this.changeHandler(e)}
              />
              <MDBInput
                name="company"
                icon="far fa-building"
                type="text"
                label={Enterprise}
                onInput={e => this.changeHandler(e)}
              />
              <MDBInput
                name="country"
                icon="fas fa-map-marked-alt"
                type="text"
                label={Country}
                onInput={e => this.changeHandler(e)}
              />
              <MDBInput
                name="password"
                icon="fas fa-key"
                type="text"
                label={ChangePassword}
                onInput={e => this.changeHandler(e)}
              />
              <MDBInput
                name="confirmPassword"
                type="text"
                label={confirmPassword}
                onInput={e => this.changeHandler(e)}
              />
              <MDBInputGroup
                material
                label={YourGithub}
                labelClassName="mb-0 ml-2"
                containerClassName="mb-3 mt-0"
                prepend="https://github.com/"
                key="github"
                inputs={
                  <MDBInput
                    name="github"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      this.changeHandler(e)
                    }
                  ></MDBInput>
                }
                id="github"
              />
              <MDBInputGroup
                material
                label={YourWebPage}
                labelClassName="mb-0 ml-2"
                containerClassName="mb-3 mt-0"
                prepend="https://"
                key="webpage"
                inputs={
                  <MDBInput
                    name="webpage"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      this.changeHandler(e)
                    }
                  ></MDBInput>
                }
                id="webpage"
              />
              <hr />
              <div className="">
                <div className="custom-control custom-checkbox custom-control-inline offset-1">
                  <input
                    name="showPublicEmail"
                    type="checkbox"
                    className="custom-control-input"
                    id="showpublicemail"
                    onChange={e => this.changeHandler(e)}
                    defaultChecked={
                      this.props.user.showPublicEmail ? true : false
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="showpublicemail"
                  >
                    <p> &nbsp;{ShowPublicEmail}</p>
                  </label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline offset-1">
                  <input
                    name="showPublicName"
                    type="checkbox"
                    className="custom-control-input"
                    id="showpublicname"
                    onChange={e => this.changeHandler(e)}
                    defaultChecked={
                      this.props.user.showPublicName ? true : false
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="showpublicname"
                  >
                    <p> &nbsp;{ShowPublicName}</p>
                  </label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline offset-1">
                  <input
                    name="showPublicLocation"
                    type="checkbox"
                    className="custom-control-input"
                    id="showpubliclocation"
                    onChange={e => this.changeHandler(e)}
                    defaultChecked={
                      this.props.user.showPublicLocation ? true : false
                    }
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="showpubliclocation"
                  >
                    <p> &nbsp;{ShowPublicLocation}</p>
                  </label>
                </div>
              </div>
              <hr />
              <MDBBtn onClick={() => this.submitSettingsChange()}>
                {SaveSettings}
              </MDBBtn>
              <div className="form-group">
                <div className="md-form input-group offset-0 ">
                  <i className="">
                    <p className="h5-responsive">
                      {this.state.settingsWarning}
                    </p>
                  </i>
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);

interface IProps {
  language: ILanguage;
  user: IUser;
}

interface IState {
  UserForm?: UserSettingsState | {};
  settingsWarning?: string;
}

interface UserSettingsState {
  firstname: string;
  lastname: string;
  cellphone: string;
  email: string;
  worksite: string;
  company: string;
  country: string;
  city: string;
  password: string;
  confirmPassword: string;
  github: string;
  webpage: string;
  ShowName: boolean;
  ShowEmail: boolean;
  ShowLocation: boolean;
}
