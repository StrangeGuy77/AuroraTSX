import * as React from "react";
import "./CommentsStyles.scss";

class Comments extends React.Component {
  render () {
    return (
      <div className="card mt-2">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h3>{{ /* comment translation */ }}</h3>
          {/* put a hidden comment button here */}
        </div>
        <div className="card-body">
          <blockquote id="post-comment">
            <form action="/software/{{soft.uniqueId}}/comment" method="POST" encType="multipart/form-data">
              <div className="form-group">
                <input type="text" className="form-control" name="name"
                  placeholder={`${/* comment username */ ""}`} />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" name="email"
                  placeholder={`${/* comment user email */ ""}`} />
              </div>
              <div className="form-group">
                <textarea name="comment" rows={2} className="form-control"
                  placeholder={`${/* comment content */ ""}`}></textarea>
              </div>
              <div className="form-group">
                <button className="btn btn-success" id="btn-comment">
                  <i className="fas fa-comment"> {{ /* Publish a comment translation */ }} </i>
                </button>
              </div>
            </form>
          </blockquote>
          <ul className="list-group p-4">
            {/* map comments here */}
            <li className="list-group-item">
              <div className="row">
                <a href="#" className="col text-center">
                  <img src="http://gravatar.com/avatar/{{gravatar}}?d=monsterid&s=45" alt="" />
                </a>
                <blockquote className="col">
                  <p className="lead">{/* comment itself */}</p>
                  <footer className="blockquote-footer">
                    {/* name of user */} - {/* timeago since */}
                  </footer>
                </blockquote>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Comments;
