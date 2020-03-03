import * as React from 'react';

export default class QuestionComponent extends React.Component<IProps, IState> {

    state = {
        hiddenAnswer: false
    };

    render () {
        const { question, Answer } = this.props;
        return (
            <div>
                <div className="card-header" onClick={() => this.setState((prevState: IState, _: any) => { return { hiddenAnswer: !prevState.hiddenAnswer }; })}>
                    {question}
                    <i className="fas fa-sort-down"></i>
                </div>
                {
                    this.state.hiddenAnswer ?
                        <div className="card-body">
                            {
                                typeof Answer !== 'object' ? Answer :
                                    <Answer />
                            }
                        </div>
                        : null
                }
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
}