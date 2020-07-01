import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../../redux/State";
import { getLanguage } from "../../../redux/language/LangSelector";
import ILanguage from "../../../redux/language/Lang";
import IUser from "../../../redux/user/user";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBadge } from "mdbreact";
import Axios from "axios";
import { setCurrentUser, clearUser } from "../../../redux/user/userActions";
import { Dispatch } from "redux";

class UserInfo extends React.Component<IProps, IState> {
  state = {
    file: null,
  };

  handleInput = (
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const files = (e.currentTarget as HTMLInputElement).files as FileList;

    if (files) {
      if ((files as FileList).length > 0) {
        this.setState((_) => ({
          file: (files as FileList).item(0) as any,
        }));
      }
    }
  };

  uploadProfilePic = async () => {
    if (!this.state.file) {
      return;
    } else {
      console.log(this.state.file);
      try {
        const newProfilePic = new FormData();
        newProfilePic.append("file", this.state.file as any);
        const { data } = await Axios.post(
          `http://localhost:3500/user/update?username=${this.props.user.username}&userprofilepic=true`,
          newProfilePic
        );
        if (data.userExist) {
          this.props.clearUser();
          this.props.setCurrentUser(data.userExist);
        } else {
          console.log("No funciono xdd");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  render() {
    const { signSelectFile, upload } = this.props.language.softwareInfo;
    const {
      Activity,
      TimesLiked,
      TimesPosted,
      TimesShared,
      Followers,
    } = this.props.language.userInfo;
    return (
      <div className="flex-fill">
        <div className="text-center">
          <img
            src={this.props.user ? (this.props.user as any).profilePic : null}
            alt=""
            className="avatar img-circle img-thumbnail"
          />
          <hr />
          <p className="h5-responsive text-center">
            {this.props.user ? this.props.user.username : null}
          </p>
          <hr />
          <p className="h5-responsive text-center">Aurora CEO</p>
          <hr />
          <p className="h5-responsive text-center">Little description</p>
          <hr />
          <div className="input-group mb-3">
            <div className="custom-file">
              <input
                type="file"
                name="image"
                id="profilePicInput"
                className="custom-file-input"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.handleInput(e)
                }
              />
              <label htmlFor="profilePicInput" className="custom-file-label">
                {signSelectFile}
              </label>
            </div>
          </div>
          <button
            onClick={() => this.uploadProfilePic()}
            className="input-group-text btn btn-primary"
          >
            {upload}
          </button>
        </div>
        <hr />
        <MDBListGroup>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-comments" />
            {" " + Activity}
            <MDBBadge color="primary" pill className="offset-2" />
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-share-alt-square" />
            {" " + TimesShared}
            <MDBBadge color="primary" pill className="" />
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-thumbs-up" />
            {" " + TimesLiked}
            <MDBBadge color="primary" pill className="offset-7" />
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-rss" />
            {" " + TimesPosted}
            <MDBBadge color="primary" pill className="offset-6" />
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-users" />
            {" " + Followers}
            <MDBBadge color="primary" pill className="" />
          </MDBListGroupItem>
        </MDBListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user)),
  clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

interface IProps {
  language: ILanguage;
  isOwnProfile: boolean;
  user: IUser;
  setCurrentUser: (user: IUser) => any;
  clearUser: () => any;
}

interface IState {
  file: FileList | null;
}
