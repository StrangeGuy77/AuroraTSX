import * as React from "react";
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setCurrentUser } from "../../redux/user/userActions";
import IUser from "../../redux/user/user";
import Axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol
} from "mdbreact";

class SignInCard extends React.Component<IProps, IState> {
  state = {
    openRegisterCard: false,
    email: "",
    password: "",
    signInErrors: "",
    signInErrorsColor: "#ff0000",
    fadeOut: "",
    dataDismiss: ""
  };

  handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    this.setState((prevState: IState) => ({
      ...prevState,
      [name]: value
    }));
  };

  signInEvent = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { setCurrentUser } = this.props;

    try {
      const response: IUser | Promise<IUser> | null | any = JSON.parse(
        JSON.stringify(
          await Axios.post(`http://localhost:3500/user/login`, {
            email,
            password
          })
        )
      );
      if (response.data.code === 200) {
        setCurrentUser(response.data.userData as IUser);
        this.setState({
          dataDismiss: "card"
        });
      } else {
        this.setState({
          signInErrors: response.data.message
        });
      }
    } catch (error) {
      this.setState({
        signInErrors: `There was a problem sending data to the server: ${error}`
      });
    }
  };

  render() {
    // const { login, cancel } = this.props.language.sectionsInfo;
    // const {
    //   email,
    //   password,
    //   NotRegisteredYet,
    //   SignUpHere
    // } = this.props.language.userInfo;

    return (
      <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
            waves
          />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      // <div className="card-md-2">
      //   <div className="card-content">
      //     <div className="card-header">
      //       <h5 className="card-title" id="loginCardLabel">
      //         {login}
      //       </h5>
      //       <button className="close" type="button" aria-label="Close">
      //         <span
      //           aria-hidden="true"
      //           data-dismiss="card"
      //           onClick={() => {
      //             this.setState((_: IState) => ({
      //               fadeOut: "fadeOutUp delay-0s"
      //             }));
      //           }}
      //         >
      //           &times;
      //         </span>
      //       </button>
      //     </div>
      //     <div className="card-body">
      //       <div className="form-group">
      //         <div className="input-group mb-3">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text" id="basic-addon1">
      //               <i className="fas fa-at"></i>
      //             </span>
      //           </div>
      //           <input
      //             type="text"
      //             className="form-control"
      //             placeholder={email}
      //             aria-label="Username"
      //             aria-describedby="basic-addon1"
      //             name="email"
      //             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      //               this.handleInput(e)
      //             }
      //             required
      //           />
      //         </div>
      //       </div>
      //       <div className="form-group">
      //         <div className="input-group mb-3">
      //           <div className="input-group-prepend">
      //             <span className="input-group-text" id="basic-addon1">
      //               <i className="fas fa-key"></i>
      //             </span>
      //             <input
      //               type="password"
      //               className="form-control"
      //               placeholder={password}
      //               aria-label="Password"
      //               aria-describedby="basic-addon1"
      //               name="password"
      //               onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
      //                 this.handleInput(e)
      //               }
      //               required
      //             />
      //           </div>
      //         </div>
      //         <div className="form-group">
      //           <div className="input-group mb-3">
      //             <div className="input-group-prepend">
      //               <p
      //                 style={{ color: this.state.signInErrorsColor }}
      //                 id="login-alert-section"
      //               >
      //                 {this.state.signInErrors}
      //               </p>
      //               <hr />
      //             </div>
      //           </div>
      //           <p>
      //             {NotRegisteredYet}
      //             <Link to="/signup">{SignUpHere}</Link>
      //           </p>
      //         </div>
      //       </div>
      //       <div className="card-footer">
      //         <button className="btn btn-secondary" data-dimiss="card">
      //           {cancel}
      //         </button>
      //         <button
      //           className="btn btn-primary"
      //           type="submit"
      //           onClick={(e: React.FormEvent<HTMLButtonElement>) =>
      //             this.signInEvent(e)
      //           }
      //           data-dismiss={this.state.dataDismiss}
      //         >
      //           {login}
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: IUser) => dispatch(setCurrentUser(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignInCard)
);

interface IProps extends RouteComponentProps {
  language: ILanguage;
  setCurrentUser: (user: IUser) => any;
}

interface IState {
  openRegisterCard: boolean | string;
  email: string;
  password: string;
  signInErrors: string | null;
  signInErrorsColor: string;
  fadeOut: string;
  dataDismiss: string;
}
