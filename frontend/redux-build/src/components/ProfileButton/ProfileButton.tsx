import * as React from "react";
import {
  MDBDropdown,
  MDBIcon,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
} from "mdbreact";
import { connect } from "react-redux";
import ILanguage from "../../redux/language/Lang";
import IUser from "../../redux/user/user";
import { Link } from "react-router-dom";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { Dispatch } from "redux";
import { clearUser } from "../../redux/user/userActions";

const ProfileButton: React.FC<IProps> = ({
  language: { userInfo },
  user,
  clearUser,
}) => {
  const { MyProfile } = userInfo;
  const username = (user as any).user.username;

  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle caret color="dark">
          <MDBIcon icon="fas fa-user" />
          {" " + username}
        </MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBIcon icon="fas fa-id-card" />
            <Link to={`/user/${username}`}>{MyProfile}</Link>
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => clearUser()}>
            <MDBIcon icon="fas fa-sign-out-alt" />
            <Link to={`/user/${username}`}>{"Logout"}</Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  user: selectCurrentUser(state) as IUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearUser: () => dispatch(clearUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileButton);

interface IProps {
  language: ILanguage;
  clearUser: () => any;
  user: IUser;
}
