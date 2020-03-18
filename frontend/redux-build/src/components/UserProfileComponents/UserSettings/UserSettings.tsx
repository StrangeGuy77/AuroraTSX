import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../../redux/State";
import { getLanguage } from "../../../redux/language/LangSelector";
import { MDBInput, MDBBtn, MDBBtnGroup, MDBInputGroup } from "mdbreact";
import ILanguage from "../../../redux/language/Lang";
import IUser from "../../../redux/user/user";

class UserSettings extends React.Component<IProps, IState> {
  state = {
    UserForm: undefined
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
      City,
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
              />
              <MDBInput
                icon="far fa-address-card"
                type="text"
                label={Lastname}
              />

              <MDBInput icon="fas fa-envelope" type="text" label={signEmail} />
              <MDBInput
                icon="fas fa-mobile-alt"
                type="text"
                label={cellphone}
              />
              <MDBInput icon="fas fa-briefcase" type="text" label={WorkSite} />
              <MDBInput icon="far fa-building" type="text" label={Enterprise} />
              <MDBInput
                icon="fas fa-map-marked-alt"
                type="text"
                label={Country}
              />
              <MDBInput icon="fas fa-city" type="text" label={City} />
              <MDBInput icon="fas fa-key" type="text" label={ChangePassword} />
              <MDBInput type="text" label={confirmPassword} />
              <MDBInputGroup
                material
                label={YourGithub}
                labelClassName="mb-0 ml-2"
                containerClassName="mb-3 mt-0"
                prepend="https://github.com/"
                id="basic-url-material"
              />
              <MDBInputGroup
                material
                label={YourWebPage}
                labelClassName="mb-0 ml-2"
                containerClassName="mb-3 mt-0"
                prepend="https://"
                id="basic-url-material"
              />
              <MDBBtn onClick={() => null}>{SaveSettings}</MDBBtn>
              <MDBBtnGroup>
                <MDBInput
                  type="checkbox"
                  checked={this.props.user.showPublicEmail ? true : false}
                  label={ShowPublicEmail}
                />
                <MDBInput
                  type="checkbox"
                  checked={this.props.user.showPublicName ? true : false}
                  label={ShowPublicName}
                />
                <MDBInput
                  type="checkbox"
                  checked={this.props.user.showPublicLocation ? true : false}
                  label={ShowPublicLocation}
                />
              </MDBBtnGroup>
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
  UserForm: UserSettingsState | undefined;
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
