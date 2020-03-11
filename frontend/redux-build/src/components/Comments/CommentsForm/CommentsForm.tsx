import * as React from "react";
import GlobalState from "../../../redux/State";
import { getLanguage } from "../../../redux/language/LangSelector";
import { connect } from "react-redux";
import ILanguage from "../../../redux/language/Lang";

export const CommentsForm: React.FC<IProps> = ({
  language: { softwareInfo }
}) => {
  const { signCommentContent, actionComment } = softwareInfo;
  return (
    <div>
      <div className="card-body">
        <blockquote id="post-comment">
          <form
            action="/software/{{soft.uniqueId}}/comment"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <textarea
                name="comment"
                rows={2}
                className="form-control"
                placeholder={signCommentContent}
              ></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-success" id="btn-comment">
                <i className="fas fa-comment"> {actionComment} </i>
              </button>
            </div>
          </form>
        </blockquote>
      </div>
    </div>
  );
};

const mapStateToProps = (state: GlobalState) => ({
  language: getLanguage(state)
});

export default connect(mapStateToProps)(CommentsForm);

interface IProps {
  language: ILanguage;
}
