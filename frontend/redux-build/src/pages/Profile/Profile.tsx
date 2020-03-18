import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";
import ILanguage from "../../redux/language/Lang";
import { RouteComponentProps } from "react-router-dom";
import IUser from "../../redux/user/user";
import Axios from "axios";
import {
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBTabContent,
  MDBTabPane,
  MDBContainer,
  MDBCol
} from "mdbreact";
import UserInfo from "../../components/UserInfo/UserInfo";

export class Profile extends React.Component<IProps, IState> {
  state = {
    isOwnProfile: false,
    userProfileOwner: null,
    activeItem: "1"
  };

  async componentDidMount() {
    const username = this.props.match.params.username;
    const { data } = await Axios.get(
      `http://localhost:3500/user?username=${username}`
    );
    if (data) {
      this.setState({
        userProfileOwner: data.user
      });
    } else {
      this.props.history.push("/");
    }
  }

  toggle = (tab: string) => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    return (
      <div>
        <MDBContainer className="d-flex" fluid>
          <MDBCol md="4" className="">
            <UserInfo
              isOwnProfile={this.state.isOwnProfile}
              user={this.state.userProfileOwner as any}
            />
          </MDBCol>

          <div className="flex-fill">
            <MDBCol xl="12" className="offset-0">
              <MDBNav className="nav-tabs mt-5">
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "1"}
                    onClick={this.toggle("1")}
                    role="tab"
                  >
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "2"}
                    onClick={this.toggle("2")}
                    role="tab"
                  >
                    Profile
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "3"}
                    onClick={this.toggle("3")}
                    role="tab"
                  >
                    Profile
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.activeItem}>
                <MDBTabPane tabId="1" role="tabpanel">
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil odit magnam minima, soluta doloribus reiciendis
                    molestiae placeat unde eos molestias. Quisquam aperiam,
                    pariatur. Tempora, placeat ratione porro voluptate odit
                    minima.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                  <p>
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </div>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  user: selectCurrentUser(state) as IUser
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

interface IProps extends RouteComponentProps<MatchingParams> {
  language: ILanguage;
  user: IUser;
}

interface IState {
  isOwnProfile: boolean;
  userProfileOwner: IUser | null;
  activeItem: string | number;
}

interface MatchingParams {
  username: string;
}
