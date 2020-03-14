import * as React from "react";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import { getLanguage } from "../../redux/language/LangSelector";
import ILanguage from "../../redux/language/Lang";
import { Link } from "react-router-dom";
import { SoftwareSchema } from "../../redux/software/software.d";
import { getSoftwaresFromState } from "../../redux/software/softwareSelector";
import {
  MDBCard,
  // MDBIcon,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBCardGroup
} from "mdbreact";

const SoftwareList: React.FC<IProps> = ({
  language: {
    softwareInfo: { recentUploads }
  },
  softwares
}) => {
  return (
    <div>
      {softwares.length > 0 ? (
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            {recentUploads}
          </h2>
          <p className="text-center w-responsive mx-auto pb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>

          <MDBRow>
            <MDBCardGroup>
              {softwares.map((soft: SoftwareSchema) =>
                soft ? (
                  <React.Fragment key={soft.id}>
                    <MDBCol md="4">
                      <MDBCard>
                        <Link to={`/software/${soft.id}`}>
                          <MDBCardImage
                            className="img-fluid"
                            src={soft.imageUrl}
                            waves
                          />
                        </Link>
                        <MDBCardBody>
                          <MDBCardTitle>{soft.title}</MDBCardTitle>
                          <MDBCardText>{soft.description}</MDBCardText>
                          <div className="d-flex justify-content-end">
                            <MDBCardText className="font-weight-bold">
                              ${soft.price}
                            </MDBCardText>
                          </div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </React.Fragment>
                ) : null
              )}
            </MDBCardGroup>
          </MDBRow>
        </MDBContainer>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  softwares: getSoftwaresFromState(state)
});

export default connect(mapStateToProps)(SoftwareList);

interface IProps {
  language: ILanguage | any;
  softwares: SoftwareSchema[] | any;
}
