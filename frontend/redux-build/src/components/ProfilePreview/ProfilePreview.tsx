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
    console.log(this.state);

    return (
      <div className="x">
        <div className="card middle">
          <div className="top-section">
            {profile_pic !== "default_profile_pic.jpg" ? (
              <img src={DefaultPic} alt="" />
            ) : (
              <img src={profile_pic} alt="" />
            )}
            <div className="menuicon">
              <span className="s1"></span>
              <span className="s2"></span>
            </div>
            <div className="name">
              <br />
              <span>{this.props.username.toLocaleUpperCase()}</span>
            </div>
          </div>

          <div className="info-section">
            <hr />
            <h2>
              About
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
              contact
              <div className="border"></div>
            </h2>
            <div className="s-m">
              <a href="" className="fab fa-facebook-f"></a>
              <a href="" className="fab fa-twitter"></a>
              <a href="" className="fab fa-instagram"></a>
              <a
                href={
                  github ? `https://github.com/${github}` : `https://github.com`
                }
                target="_blank"
                className="fab fa-github-square"
              ></a>
              <a href="" className="fab fa-whatsapp"></a>
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
