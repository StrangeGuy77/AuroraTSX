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
      {softwares.softwares.length > 0 ? (
        <div className="card mt-3">
          <div className="card-header bg-dark text-white">
            <h3>
              <i className="fas"></i>
              {recentUploads}
            </h3>
          </div>
          <div className="card-body">
            <div className="row">
              {softwares.softwares.map((soft: SoftwareSchema) =>
                soft ? (
                  <React.Fragment key={soft.id}>
                    <div className="col-md-4">
                      <div className="card mt-4">
                        <div className="card-image">
                          <Link to={`/software/${soft.id}`}>
                            <img
                              src={soft.imageUrl}
                              alt={soft.title}
                              className="w-100 h-100 img-thumbnail"
                            />
                          </Link>
                        </div>
                        <div className="card-content">
                          <span className="card-title">{soft.title}</span>
                          <hr />
                          <p>
                            <i className="fas fa-info-circ" />
                            {soft.description}
                          </p>
                          <hr />
                          <p>
                            <i className="fas fa-money-bill-wave icon d-block">
                              <span className="d-block">{soft.price}</span>
                            </i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ) : null
              )}
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
  language: ILanguage | any;
  softwares: SoftwareSchema[] | any;
}
