import * as React from "react";
import { MDBCardBody, MDBIcon } from "mdbreact";

export default class QuestionComponent extends React.Component<IProps, IState> {
  state = {
    hiddenAnswer: false,
    fadeOutAnimation: "slideInDown"
  };

  render() {
    const { question, Answer } = this.props;
    return (
      <div>
        <MDBCardBody
          onClick={() =>
            this.setState((prevState: IState, _: any) => {
              return {
                hiddenAnswer: !prevState.hiddenAnswer
              };
            })
          }
          className="text-center"
        >
          <div>{question}</div>
          <MDBIcon icon="fas fa-sort-down" />
          {this.state.hiddenAnswer ? (
            <MDBCardBody className={`animated ${this.state.fadeOutAnimation}`}>
              {typeof Answer !== "object" ? Answer : <Answer />}
            </MDBCardBody>
          ) : null}
        </MDBCardBody>
      </div>
    );
  }
}

interface IProps {
  question: string;
  Answer: string | any;
}

interface IState {
  hiddenAnswer: boolean;
  fadeOutAnimation: string;
}
