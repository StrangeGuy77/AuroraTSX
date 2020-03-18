import * as React from "react";
import {
  MDBDropdown,
  MDBIcon,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle
} from "mdbreact";
import { connect } from "react-redux";
import ILanguage from "../../redux/language/Lang";
import IUser from "../../redux/user/user";
import { Link } from "react-router-dom";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";

const ProfileButton: React.FC<IProps> = ({ language: { userInfo }, user }) => {
  const { MyProfile, MySoftwares, MyBooks, MyTickets, Help } = userInfo;
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
          <MDBDropdownItem>
            <MDBIcon icon="fas fa-file-code" />
            <Link to={`/user/${username}/softwares`}>{MySoftwares}</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBIcon icon="fas fa-book" />
            <Link to={`/user/${username}/books`}>{MyBooks}</Link>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBIcon icon="fas fa-ticket-alt" />
            <Link to={`/user/${username}/tickets`}>{MyTickets}</Link>
          </MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>
            <MDBIcon icon="fas fa-question-circle" />
            <Link to={`/contact-us`}>{Help}</Link>
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  user: selectCurrentUser(state) as IUser
});

export default connect(mapStateToProps)(ProfileButton);

interface IProps {
  language: ILanguage;
  user: IUser;
}
