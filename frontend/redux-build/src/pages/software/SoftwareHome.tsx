import * as React from "react";
import './SoftwareHomeStyles.scss';

export default class SoftwareHome extends React.Component<any, any> {
  render () {
    return (
      <div className="container-fluid p4">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header bg-dark">
                <h3 className="card-title text-white">
                  <i className="far fa-file-code">
                    {/* Upload software title translation */}
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
                            {/* Upload translation */}
                          </span>
                        </div>
                        <input type="file" name="image" className="custom-file-input" />
                        <label htmlFor="inputGroupFile" className="custom-file-label">
                          {/* Select File Translation */}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <i className="fas fa-tag icon"></i>
                    <input type="text" name="title" className="form-control" placeholder={`${/* Software title translation placeholder */""}`} />
                  </div>
                  <div className="form-group">
                    <i className="fas fa-info-circle icon"></i>
                    <textarea name="description" rows={2} className="form-control" placeholder={`${/* Description translation placeholder*/ ""}`}></textarea>
                  </div>
                  <div className="form-group">
                    <i className="fab fa-js icon"></i>
                    <select name="language" id="" className="form-control" required>
                      <option value="js">Javascript</option>
                      <option value="ruby">Javascript</option>
                      <option value="python">Javascript</option>
                      <option value="cpp">Javascript</option>
                      <option value="cs">Javascript</option>
                      <option value="c">Javascript</option>
                      <option value="java">Javascript</option>
                      <option value="php">Javascript</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <i className="fas fa-dollar-sign icon"></i>
                    <input type="text" name="price" className="form-control" />
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
  }
}
