import * as React from "react";
import IUser from "../../redux/user/user";
import DefaultPic from "../../static/images/default_pic.png";
import "./ProfilePreviewStyles.scss";
import Axios from "axios";

class ProfilePreview extends React.Component<IProps, IState> {
  state: IState | any = {
    user: {
      profile_pic: "default_pic.jpg",
      github: "StrangeGuy77"
    }
  };

  async componentDidMount() {
    const response = await Axios.get(
      `http://localhost:3500/user?username=${this.props.username}`
    );
    this.setState({
      user: response.data.user
    });
  }
  render() {
    const { profile_pic, github } = this.state.user;

    return (
      <div className="x">
        <div className="card middle">
          <div className="top-section">
            {profile_pic === "default_profile_pic.jpg" ||
            (this.state as any).user.profilePic ===
              "default_profile_pic.jpg" ? (
              <img src={DefaultPic} alt="" />
            ) : (
              <img src={(this.state as any).user.profilePic} alt="" />
            )}
            <div className="menuicon">
              <span className="s1"></span>
              <span className="s2"></span>
            </div>
          </div>

          <div className="info-section">
            <hr />
            <h2>
              {this.props.username.toLocaleUpperCase()}
              <div className="border"></div>
            </h2>
            <hr />
            <p>
              {this.props.softdesc
                ? this.props.softdesc
                : `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.`}
            </p>
            <h2>
              Contact
              <div className="border"></div>
            </h2>
            <div className="s-m">
              <a
                href="https://facebook.com/StrangeGuy77x"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-facebook-f"
              >
                {""}
              </a>
              <a
                href="https://twitter.com/StrangeGuy77"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-twitter"
              >
                {""}
              </a>
              <a
                href="https://instagram.com/jhonatan_rgx"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-instagram"
              >
                {""}
              </a>
              <a
                href={
                  github ? `https://github.com/${github}` : `https://github.com`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-github-square"
              >
                {""}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePreview;

interface IProps {
  username: string;
  softdesc: string;
}

interface IState {
  user?: IUser;
}
