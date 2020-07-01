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
  // MDBNavLink,
  MDBTabContent,
  MDBTabPane,
  MDBContainer,
  MDBCol,
} from "mdbreact";
import UserInfo from "../../components/UserProfileComponents/UserInfo/UserInfo";
import { isEmpty } from "../../utils/utils";
import UserSettings from "../../components/UserProfileComponents/UserSettings/UserSettings";

class Profile extends React.Component<IProps, IState> {
  state = {
    isOwnProfile: false,
    userProfileOwner: undefined,
    activeItem: "1",
  };

  async componentDidMount() {
    const username = this.props.match.params.username;
    const { data } = await Axios.get(
      `http://localhost:3500/user?username=${username}`
    );
    if (data.user) {
      this.setState({
        userProfileOwner: data.user,
      });
      if (!isEmpty(this.props.user)) {
        const { id } = (this.props.user as any).user;
        console.log((this.state.userProfileOwner as any).id === id);
        if ((this.state.userProfileOwner as any).id === id) {
          this.setState({
            isOwnProfile: true,
          });
        }
      }
    } else {
      this.props.history.push("/");
    }
  }

  toggle = (tab: string) => () => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    // const { home } = this.props.language.sectionsInfo;

    // const { Settings, /* Contact,  PayingHistory */ } = this.props.language.userInfo;

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
                  {/* <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "1"}
                    onClick={this.toggle("1")}
                    role="tab"
                  >
                    {home}
                  </MDBNavLink> */}
                </MDBNavItem>
                {this.state.isOwnProfile ? (
                  <React.Fragment>
                    <MDBNavItem>
                      {/* <MDBNavLink
                        to="#"
                        active={this.state.activeItem === "2"}
                        onClick={this.toggle("2")}
                        role="tab"
                      >
                        {Settings}
                      </MDBNavLink> */}
                    </MDBNavItem>
                  </React.Fragment>
                ) : null}
                <MDBNavItem>
                  {/* <MDBNavLink
                    to="#"
                    active={this.state.activeItem === "3"}
                    onClick={this.toggle("3")}
                    role="tab"
                  >
                    {Contact}
                  </MDBNavLink> */}
                </MDBNavItem>
                {this.state.isOwnProfile ? (
                  <React.Fragment>
                    <MDBNavItem>
                      {/* <MDBNavLink
                        to="#"
                        active={this.state.activeItem === "4"}
                        onClick={this.toggle("4")}
                        role="tab"
                      >
                        {PayingHistory}
                      </MDBNavLink> */}
                    </MDBNavItem>
                  </React.Fragment>
                ) : null}
              </MDBNav>
              <MDBTabContent activeItem={this.state.activeItem}>
                <MDBTabPane tabId="1" role="tabpanel">
                  {this.state.isOwnProfile ? (
                    <React.Fragment>
                      <MDBTabPane tabId="2" role="tabpanel">
                        <UserSettings
                          user={this.state.userProfileOwner as any}
                        />
                      </MDBTabPane>
                    </React.Fragment>
                  ) : null}
                </MDBTabPane>
                {this.state.isOwnProfile ? (
                  <React.Fragment>
                    <MDBTabPane tabId="2" role="tabpanel">
                      <UserSettings user={this.state.userProfileOwner as any} />
                    </MDBTabPane>
                  </React.Fragment>
                ) : null}
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2">
                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                    voluptate odit minima. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Nihil odit magnam minima,
                    soluta doloribus reiciendis molestiae placeat unde eos
                    molestias.
                  </p>
                </MDBTabPane>
                {this.state.isOwnProfile ? (
                  <React.Fragment>
                    <MDBTabPane tabId="4" role="tabpanel">
                      <p className="mt-2">
                        Quisquam aperiam, pariatur. Tempora, placeat ratione
                        porro voluptate odit minima. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Nihil odit magnam minima,
                        soluta doloribus reiciendis molestiae placeat unde eos
                        molestias.
                      </p>
                    </MDBTabPane>
                  </React.Fragment>
                ) : null}
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
  user: selectCurrentUser(state) as IUser,
});

export default connect(mapStateToProps)(Profile);

interface IProps extends RouteComponentProps<MatchingParams> {
  language: ILanguage;
  user: IUser;
}

interface IState {
  isOwnProfile: boolean;
  userProfileOwner: IUser | undefined;
  activeItem: string | number;
}

interface MatchingParams {
  username: string;
}
