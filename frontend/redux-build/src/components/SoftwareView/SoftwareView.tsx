import * as React from "react";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import { match, withRouter, RouteComponentProps } from "react-router-dom";
import ILanguage from "../../redux/language/Lang";
import { SoftwareSchema } from "../../redux/software/software";
import { getOneSoftware } from "../../redux/software/softwareSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";
import IUser from "../../redux/user/user";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter
} from "mdbreact";

class SoftwareView extends React.Component<IProps, SoftwareSchema> {
  render() {
    const { software } = this.props;
    const {
      // userWhoUploaded,
      // price,
      // description,
      // like,
      // comments
    } = this.props.language.softwareInfo;
    console.log(this.props.user);

    return software ? (
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardImage src={software.imageUrl} className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle>{software.title}</MDBCardTitle>
                <MDBCardTitle></MDBCardTitle>
                <MDBCardText>{software.description}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter></MDBCardFooter>
            </MDBCard>
            {/* <div className="h5-responsive font-weight-bold">
              <div className="d-flex offset-0">
                {userWhoUploaded}:{" "}
                <Link to={`/user/${software.userUploaderName}`} className="co">
                  {software.userUploaderName}
                </Link>
              </div>
            </div> */}
            <div className="h5-responsive font-weight-bold">
              <div className="d-flex offset-1">{software.description}</div>
            </div>
            <div className="h5-responsive font-weight-bold">
              <div className="d-flex offset-1">{software.price}</div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    ) : //   <div className="container-fluid p-4">
    //     <div className="row">
    //       <div className="col-md-8">
    //         <div className="card">
    //           <div className="card-header d-flex justify-content-between align-items-center">
    //             <h2 className="card-title">{software.title}</h2>
    //             {/* super user?  */
    //             /*
    //              *<button className="btn btn-danger" id="btn-delete" data-id="{{soft.uniqueId}}">
    //              *<i className="fa fa-times"></i> {{language.softwareInfo.delete}}
    //              *</button>
    //              */}
    //           </div>
    //           <div className="card-body">
    //             <p style={{ fontWeight: 700 }}>
    //               {userWhoUploaded}:
    //               <Link to={`/users/${software?.userUploaderName}`}>
    //                 {software.userUploaderName}
    //               </Link>
    //             </p>
    //             <p style={{ fontWeight: 700 }}>
    //               {price}: {software.price}$
    //             </p>
    //             <p style={{ fontWeight: 700 }}>
    //               {description}: {software?.description}
    //             </p>
    //             <div className="text-center">
    //               <img src={software?.imageUrl} alt="" className="img-fluid" />
    //             </div>
    //             <p></p>
    //             {/* If software is already bought <button onClick="window.location.href='/{{languageFinder}}/software/{{soft.uniqueId}}/download'"
    //                     className="btn btn-info" id="btn-download" data-id="{{soft.filename}}">
    //                     <i className="fas fa-download"></i> {{language.softwareInfo.download}}
    //                 </button> */
    //             /* Else  <div className="card-footer">
    //                     <form action="/{{languageFinder}}/software/{{soft.uniqueId}}/buy" method="GET">
    //                         <script src="https://checkout.stripe.com/checkout.js" className="stripe-button"
    //                             data-key="pk_test_Z5JZQq8QxBrvoKf8bgss1PkH0072q9LKtb" data-locale="{{languageFinder}}"
    //                             data-amount="{{soft.price}}00" data-name="{{soft.title}}"
    //                             data-description="{{soft.description}}" data-image="/public/upload/{{soft.filename}}"
    //                             data-locale="auto" data-currency="usd" data-email="{{session.email}}">
    //                             </script>
    //                         <script>
    //                             document.getElementsByclassNameName('stripe-button-el')[0].style.display = 'none';
    //                         </script>
    //                         {
    //                             /* User is not logged? */
    //             /*
    //                             *<button className="btn btn-dark btn-block" disabled>
    //                             {{language.buyInfo.youNeedToBeLogged}} <i className="fas fa-shopping-cart"></i>
    //                         </button>
    //                             */
    //             /*logged:
    //                             <button className="btn btn-dark btn-block">
    //                             {{language.buyInfo.buy}} <i className="fas fa-shopping-cart"></i>
    //                         </button>
    //                            */
    //             /*
    //                     </form>
    //                 </div>*/}
    //           </div>
    //           <div className="card-footer d-flex justify-content-between align-items-center">
    //             <button
    //               className="btn btn-success"
    //               id="btn-like"
    //               data-id="{{soft.filename}}"
    //             >
    //               <i className="fas fa-thumbs-up"></i> {like}
    //             </button>
    //             <p>
    //               {/* <span className="likes-count">{{soft.likes}}</span> */}
    //               <i className="fas fa-heart"></i>
    //             </p>
    //             <p>{/* {{soft.views}} <i className="fas fa-eye"></i> */}</p>
    //             <p>
    //               <i className="far fa-clock"></i>
    //               {/* {{timeago soft.timestamp}} */}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="card mt-2">
    //           <button className="card-header d-flex justify-content-between align-items-center">
    //             <h3>{comments}</h3>
    //             {/* {{#if session.nonlogged}} */}
    //             {/* <button className="btn btn-info" id="btn-toggle-comment" disabled>
    //                     <i className="fa fa-comment-o"></i> {{language.softwareInfo.loginToshareAcomment}}
    //                 </button>
    //                 {{else}}
    //                 <button className="btn btn-info" id="btn-toggle-comment">
    //                     <i className="fa fa-comment-o"></i> {{language.softwareInfo.shareAcomment}}
    //                 </button>
    //                 {{/if}} */}
    //           </button>
    //         </div>

    //         {/* Comment action */}
    //       </div>
    //       {/* {{#if sidebar.stats.softwares}} */} */}
    //       {
    //         //     <div className="col-md-4">
    //         //     {{> sidebar/stats}}
    //         //     {{> components/softwareComponents/profilePreview}}
    //         // </div>
    //       }
    //     </div>
    //   </div>
    null;
  }
}

const mapStateToProps = (state: GlobalState, ownProps: IProps) => ({
  language: getLanguage(state),
  software: getOneSoftware(
    (ownProps.match as match<IMatchParams>).params.softwareId as string,
    state
  ) as SoftwareSchema,
  user: selectCurrentUser(state) as IUser
});

export default withRouter(connect(mapStateToProps)(SoftwareView));

interface IProps extends RouteComponentProps<IMatchParams> {
  language: ILanguage;
  software: SoftwareSchema;
  user: IUser;
}

interface IMatchParams {
  softwareId: string;
}
