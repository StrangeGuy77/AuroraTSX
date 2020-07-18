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
  MDBCardFooter,
  MDBIcon,
  MDBBtn,
} from "mdbreact";
import ProfilePreview from "../ProfilePreview/ProfilePreview";
import StripeButtonCheckout from "../StripeButton/StripeButton";
import { isEmpty } from "../../utils/utils";
import { format } from "timeago.js";

class SoftwareView extends React.Component<IProps, SoftwareSchema> {
  deleteSoftware = () => {};

  likeSoftware = () => {};

  render() {
    const { software } = this.props;
    const {
      // price,
      // description,
      like,
      // comments
    } = this.props.language.softwareInfo;
    const { youNeedToBeLogged } = this.props.language.buyInfo;

    return software ? (
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol md="8">
            <MDBCard>
              <MDBCardImage src={software.imageUrl} className="img-fluid" />
              <MDBCardBody>
                <MDBCardTitle>{software.title}</MDBCardTitle>
                <MDBCardText>${software.price}</MDBCardText>
              </MDBCardBody>
              <MDBCardFooter>
                <div className="d-flex justify-content-between align-items-center">
                  <MDBBtn color="dark-green" data-id="{{soft.filename}}">
                    <MDBIcon icon="fas fa-thumbs-up" /> {like}
                  </MDBBtn>
                  <p>
                    {software.likes + " "}
                    <MDBIcon icon="fas fa-heart" />
                  </p>
                  <p>
                    {software.views} <MDBIcon icon="fas fa-eye" />
                  </p>
                  <p>
                    <MDBIcon icon="far fa-clock" />
                    {" " + format(software.createdAt, "en_US")}
                  </p>
                </div>
              </MDBCardFooter>
              <MDBCardFooter>
                {isEmpty(this.props.user) ? (
                  <MDBBtn color="dark" disabled>
                    {youNeedToBeLogged + " "}
                    <MDBIcon icon="fas fa-shopping-cart" />
                  </MDBBtn>
                ) : (
                  <StripeButtonCheckout
                    description={software.description}
                    image={software.imageUrl as string}
                    price={software.price}
                    email={
                      isEmpty(this.props.user)
                        ? ""
                        : (this.props.user as any).user.email
                    }
                  />
                )}
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">
            <ProfilePreview
              username={software.userUploaderName as string}
              softdesc={software.description}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    ) : //         <div className="card mt-2">
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
  user: selectCurrentUser(state) as IUser,
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
