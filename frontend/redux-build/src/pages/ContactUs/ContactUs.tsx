import * as React from "react";
import { connect } from "react-redux";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import ILanguage from "../../redux/language/Lang";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardHeader
} from "mdbreact";
import QuestionComponent from "../../components/Faq/QuestionComponent";
import UserAgreementComponent from "../../components/Faq/UserAgreementComponent";

const ContactUs: React.FC<IProps> = ({
  language: {
    faq,
    softwareInfo,
    sectionsInfo: { contactUs }
  }
}) => {
  const {
    howToUploadASoftware,
    htuSAnswer,
    howToUploadABook,
    htuBAnswer,
    howLongDoesItTakesForAnAnswer,
    hldtAnswer,
    whereToFindCookiesAndUserAgreement
  } = faq;
  const FAQ = faq.faq;
  const { sendEmail, signContent, signEmail, signIssue } = softwareInfo;

  return (
    <MDBContainer>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        {contactUs}
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
        amet numquam iure provident voluptate esse quasi, veritatis totam
        voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="contact-name" label="Your name" />
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="email" label={signEmail} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput type="text" id="issue" label={signIssue} />
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <div className="md-form mb-0">
                  <MDBInput
                    type="textarea"
                    id="contact-message"
                    label={signContent}
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </form>
          <div className="text-center text-md-left">
            <MDBBtn color="primary" size="sm">
              {sendEmail}
            </MDBBtn>
          </div>
        </MDBCol>
        <MDBCol md="3" className="text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>Km. 5 Av. Las Palmas</p>
            </li>
            <li>
              <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+57 322 277 0726</p>
            </li>
            <li>
              <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>contact@auroradevelopment.com</p>
            </li>
          </ul>
        </MDBCol>
      </MDBRow>

      <MDBCol md="9" className="md-0 mb-5">
        <h4
          className="h1-responsive font-weight-bold text-center my-5 offset-4"
          id="faq"
        >
          {FAQ}
        </h4>
      </MDBCol>

      <MDBCard>
        <MDBCardHeader className="align-items-center">
          {" "}
          <QuestionComponent
            question={howToUploadASoftware}
            Answer={htuSAnswer}
          />
          <QuestionComponent question={howToUploadABook} Answer={htuBAnswer} />{" "}
          <QuestionComponent
            question={howLongDoesItTakesForAnAnswer}
            Answer={hldtAnswer}
          />{" "}
          <QuestionComponent
            question={whereToFindCookiesAndUserAgreement}
            Answer={UserAgreementComponent}
          />{" "}
        </MDBCardHeader>
      </MDBCard>
    </MDBContainer>
  );
};

const mapDispatchToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapDispatchToProps)(ContactUs);

interface IProps {
  language: ILanguage;
}
