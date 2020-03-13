import * as React from "react";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import { connect } from "react-redux";
import SignInModal from "./SignInModal";

const SignIn: React.FC<IProps> = ({ language: { sectionsInfo } }) => {
  const { login } = sectionsInfo;

  return (
    <div>
      <li className="login-sec">
        <button
          className="btn btn-dark"
          data-toggle="modal"
          data-target="#loginModal"
        >
          <i className="fas fa-user"> {login}</i>
        </button>
        <SignInModal />
      </li>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(SignIn);

interface IProps {
  language: ILanguage;
}
