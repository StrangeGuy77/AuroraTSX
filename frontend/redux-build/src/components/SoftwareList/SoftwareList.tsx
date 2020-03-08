import * as React from "react";
import GlobalState from "../../redux/State";
import { connect } from "react-redux";
import { getLanguage } from "../../redux/language/LangSelector";
import ILanguage from "../../redux/language/Lang";
import { Link } from "react-router-dom";
import { SoftwareSchema } from "../../redux/software/software.d";
import { getSoftwaresFromState } from "../../redux/software/softwareSelector";

const SoftwareList: React.FC<IProps> = ({
  language: {
    softwareInfo: { recentUploads }
  },
  softwares
}) => {
  return (
    <div>
      {softwares.length ? (
        <div className="card mt-2">
          <div className="card-header bg-dark text-wh">
            <h3>
              <i className="fas"></i>
              {recentUploads}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              {softwares.map((soft: SoftwareSchema) => (
                <React.Fragment>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-image">
                        <Link to={`/softwares/${soft.uniqueId}`}>
                          <img
                            src={soft.filename}
                            alt={soft.title}
                            className="w-100 h-100 img-thumbnail"
                          />
                        </Link>
                      </div>
                      <div className="card-content">
                        <span className="card-title">{soft.title}</span>
                        <hr />
                        <p>
                          <i className="fas fa-info-circ"></i>
                          {soft.description}
                        </p>
                        <hr />
                        <p>
                          <i className="fas fa-money-bill-wave"></i>
                          {soft.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
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
  language: ILanguage;
  softwares: SoftwareSchema[];
}
