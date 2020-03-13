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
  MDBCardHeader,
  MDBIcon,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText
} from "mdbreact";

const SoftwareList: React.FC<IProps> = ({
  language: {
    softwareInfo: { recentUploads }
  },
  softwares
}) => {
  return (
    <div>
      {softwares.softwares.length > 0 ? (
        <MDBCard className="mt-3" ecommerce>
          <MDBCardHeader>
            <h3>
              <MDBIcon icon="fas fa-clock" children={recentUploads} />
            </h3>
          </MDBCardHeader>
          <MDBCard>
            <MDBRow>
              {softwares.softwares.map((soft: SoftwareSchema) =>
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
            </MDBRow>
          </MDBCard>
        </MDBCard>
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
