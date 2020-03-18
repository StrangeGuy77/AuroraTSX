import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import ILanguage from "../../redux/language/Lang";
import IUser from "../../redux/user/user";
import { MDBListGroup, MDBListGroupItem, MDBIcon, MDBBadge } from "mdbreact";

class UserInfo extends React.Component<IProps> {
  render() {
    const { signSelectFile, upload } = this.props.language.softwareInfo;
    const {
      Activity,
      TimesLiked,
      TimesPosted,
      TimesShared,
      Followers
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
              />
              <label htmlFor="profilePicInput" className="custom-file-label">
                {signSelectFile}
              </label>
            </div>
          </div>
          <button
            onClick={() => null}
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
            <MDBBadge color="primary" pill className="offset-2">
              14
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-share-alt-square" />
            {" " + TimesShared}
            <MDBBadge color="primary" pill className="">
              14
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-thumbs-up" />
            {" " + TimesLiked}
            <MDBBadge color="primary" pill className="offset-7">
              14
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-rss" />
            {" " + TimesPosted}
            <MDBBadge color="primary" pill className="offset-6">
              14
            </MDBBadge>
          </MDBListGroupItem>
          <MDBListGroupItem>
            <MDBIcon icon="fas fa-users" />
            {" " + Followers}
            <MDBBadge color="primary" pill className="">
              14
            </MDBBadge>
          </MDBListGroupItem>
        </MDBListGroup>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);

interface IProps {
  language: ILanguage;
  isOwnProfile: boolean;
  user: IUser;
}
