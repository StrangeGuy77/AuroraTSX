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

class SoftwareForm extends React.Component<IProps> {
  state = {
    title: "",
    description: "",
    price: "",
    devLanguages: "",
    file: ""
  };

  handleInput = (
    e: React.ChangeEvent<
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
        const newSoftware = new FormData();
        newSoftware.append("file", file);
        newSoftware.append("description", description);
        newSoftware.append("price", price);
        newSoftware.append("title", title);
        newSoftware.append("devLanguages", devLanguages);

        const userUploaderId = "20e5f568-0461-49c4-8f22-dcfe4fa725f9";
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
      upload
    } = this.props.language.softwareInfo;

    const { confirmed, _id } = this.props.user as IUser;

    return (
      <div className="card">
        <div className="card-header bg-dark">
          <h3 className="card-title text-white">
            <i className="far fa-file-code">{uploadYourSoftware}</i>
          </h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <div className="input-group">
              <div className="custom-file">
                <i className="fas fa-file-code" />
                <div className="input-group-prepend">
                  <span className="input-group-text">{uploadYourSoftware}</span>
                </div>
                <input
                  type="file"
                  name="image"
                  className="custom-file-input"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    this.handleInput(e)
                  }
                />
                <label htmlFor="inputGroupFile" className="custom-file-label">
                  {signSelectFile}
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <i className="fas fa-tag icon" />
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder={`${signSoftwareTitle}`}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleInput(e)
              }
            />
          </div>
          <div className="form-group">
            <i className="fas fa-info-circle icon" />
            <textarea
              name="description"
              rows={2}
              className="form-control"
              placeholder={`${signSoftwareDescription}`}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                this.handleInput(e)
              }
            />
          </div>
          <div className="form-group">
            <i className="fab fa-js icon" />
            <select
              name="devLanguages"
              id=""
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                this.handleInput(e)
              }
              required
            >
              <option value="null">{signSoftwareLanguage}</option>
              <option value="js">Javascript</option>
              <option value="ruby">Ruby</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="cs">C#</option>
              <option value="c">C</option>
              <option value="java">Java</option>
              <option value="php">PHP</option>
            </select>
          </div>
          <div className="form-group">
            <i className="fas fa-dollar-sign icon" />
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder={signSoftwarePrice}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleInput(e)
              }
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-success"
              onClick={() => this.uploadSoftware()}
              disabled={confirmed && _id ? false : true}
            >
              {upload}
            </button>
          </div>
        </div>
      </div>
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
