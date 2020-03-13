import * as React from "react";
import GlobalState from "../../redux/State";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";

const SignIn: React.FC<IProps> = ({ language: { sectionsInfo }, history }) => {
  const { login } = sectionsInfo;

  return (
    <div>
      <li className="login-sec">
        <button
          className="btn btn-dark"
          onClick={() => history.push("/signin")}
        >
          <i className="fas fa-user"> {login}</i>
        </button>
      </li>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default withRouter(connect(mapStateToProps)(SignIn));

interface IProps extends RouteComponentProps {
  language: ILanguage;
}
