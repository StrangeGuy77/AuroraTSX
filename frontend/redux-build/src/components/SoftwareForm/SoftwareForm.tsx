import * as React from "react";
import GlobalState from "../../redux/State";
import { getLanguage } from "../../redux/language/LangSelector";
import { selectCurrentUser } from "../../redux/user/userSelector";
import { connect } from "react-redux";
import ILanguage from "../../redux/language/Lang";
import { SoftwareSchema } from "../../redux/software/software";
import { Dispatch } from "redux";
import { uploadSoftware } from "../../redux/software/softwareActions";
import Axios from "axios";
import IUser from "../../redux/user/user";
import { MDBContainer, MDBCol, MDBRow, MDBInput, MDBBtn } from "mdbreact";
import { isEmpty } from "../../utils/utils";

class SoftwareForm extends React.Component<IProps> {
  state = {
    title: "",
    description: "",
    price: "",
    devLanguages: "",
    file: ""
  };

  handleInput = (
    e: React.FormEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { value, name } = e.currentTarget;
    const files: FileList = (e.currentTarget as HTMLInputElement)
      .files as FileList;

    if (files) {
      if ((files as FileList).length > 0) {
        this.setState(_ => ({
          file: (files as FileList).item(0)
        }));
      }
    } else {
      this.setState(_ => ({
        [name]: value
      }));
    }
  };

  uploadSoftware = async () => {
    const { description, price, title, devLanguages, file } = this.state;

    const verFlag = () => {
      for (const iterator of Object.values(this.state)) {
        if (iterator === "" || iterator === undefined || iterator === null) {
          return false;
        }
      }
      return true;
    };

    if (verFlag()) {
      try {
        const devLanguagesArray = JSON.stringify(devLanguages.split(","));
        const newSoftware = new FormData();
        newSoftware.append("file", file);
        newSoftware.append("description", description);
        newSoftware.append("price", price);
        newSoftware.append("title", title);
        newSoftware.append("devLanguages", devLanguagesArray);

        const userUploaderId = this.props.user.user.id;
        const response = await Axios.post(
          `http://localhost:3500/softwares/${userUploaderId}`,
          newSoftware
        );

        this.props.uploadSoftware(response.data.newSoftware);
      } catch (error) {
        console.log(
          "There was an error while sending information to the server."
        );
      }
    } else {
      console.log("No sé XDDD");
    }
  };

  render() {
    const {
      signSoftwareTitle,
      uploadYourSoftware,
      signSelectFile,
      signSoftwareDescription,
      signSoftwareLanguage,
      signSoftwarePrice,
      upload,
      loginToUpload
    } = this.props.language.softwareInfo;

    const { confirmed, id } = isEmpty(this.props.user)
      ? this.props.user
      : this.props.user.user;
    console.log(this.props.user);

    return (
      <MDBContainer>
        <h2 className="h1-responsive font-weight-bold text-left ml-auto my-5">
          {uploadYourSoftware}
        </h2>
        <MDBCol md="9" className="md-0 mb-5">
          <form>
            <MDBRow>
              <MDBCol md="12">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="inputGroupFileAddon01"
                    >
                      {this.state.file === ""
                        ? "No file selected"
                        : (this.state.file as any).name}
                    </span>
                  </div>
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                      aria-describedby="inputGroupFileAddon01"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        this.handleInput(e)
                      }
                      required
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      {signSelectFile}
                    </label>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBInput
                  type="text"
                  label={signSoftwareTitle}
                  icon="fas fa-tag"
                  name="title"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    this.handleInput(e)
                  }
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBInput
                  type="textarea"
                  name="description"
                  rows={2}
                  className="form-control"
                  label={signSoftwareDescription}
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    this.handleInput(e)
                  }
                  icon="fas fa-info-circle"
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBInput
                  type="text"
                  label={signSoftwareLanguage}
                  icon="fab fa-node-js"
                  name="devLanguages"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    this.handleInput(e)
                  }
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBInput
                  label={signSoftwarePrice}
                  type="number"
                  name="price"
                  icon="fas fa-dollar-sign"
                  className="form-control"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    this.handleInput(e)
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="12">
                <MDBBtn
                  className="btn btn-success"
                  onClick={() => this.uploadSoftware()}
                  disabled={confirmed || id ? false : true}
                >
                  {confirmed || id ? upload : loginToUpload}
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBCol>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state),
  user: selectCurrentUser(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  uploadSoftware: (software: SoftwareSchema) =>
    dispatch(uploadSoftware(software))
});

export default connect(mapStateToProps, mapDispatchToProps)(SoftwareForm);

interface IProps {
  language: ILanguage;
  uploadSoftware: (software: SoftwareSchema) => any;
  user: IUser | any;
}
