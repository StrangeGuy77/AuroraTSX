import * as React from "react";
import './SoftwareHomeStyles.scss';
import ILanguage from "../../redux/language/Lang";
import { getLanguage } from "../../redux/language/LangSelector";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";

const SoftwareHome: React.FC<IProps> = ({ language: { softwareInfo } }) => {
  const { signSoftwareTitle, uploadYourSoftware, signSelectFile, signSoftwareDescription, signSoftwareLanguage, signSoftwarePrice } = softwareInfo;
  return (
    <div className="container-fluid p4">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-dark">
              <h3 className="card-title text-white">
                <i className="far fa-file-code">
                  {uploadYourSoftware}
                </i>
              </h3>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <div className="input-group">
                    <div className="custom-file">
                      <i className="fas fa-file-code"></i>
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          {uploadYourSoftware}
                        </span>
                      </div>
                      <input type="file" name="image" className="custom-file-input" />
                      <label htmlFor="inputGroupFile" className="custom-file-label">
                        {signSelectFile}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <i className="fas fa-tag icon"></i>
                  <input type="text" name="title" className="form-control" placeholder={`${signSoftwareTitle}`} />
                </div>
                <div className="form-group">
                  <i className="fas fa-info-circle icon"></i>
                  <textarea name="description" rows={2} className="form-control" placeholder={`${signSoftwareDescription}`}></textarea>
                </div>
                <div className="form-group">
                  <i className="fab fa-js icon"></i>
                  <select name="language" id="" className="form-control" required>
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
                  <i className="fas fa-dollar-sign icon"></i>
                  <input type="text" name="price" className="form-control" placeholder={signSoftwarePrice} />
                </div>
                <div className="form-group">
                  <button className="btn btn-success" type="submit"></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapDispatchToProps)(SoftwareHome);

interface IProps {
  language: ILanguage;
}