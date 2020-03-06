import * as React from 'react';
import { connect } from 'react-redux';
import GlobalState from '../../redux/State';
import { getLanguage } from '../../redux/language/LangSelector';
import ILanguage from '../../redux/language/Lang';
import QuestionComponent from '../../components/Faq/QuestionComponent';
import UserAgreementComponent from '../../components/Faq/UserAgreementComponent';

const ContactUs: React.FC<IProps> = ({ language: { faq, softwareInfo } }) => {

    const {
        howToUploadASoftware,
        htuSAnswer,
        howToUploadABook,
        htuBAnswer,
        howLongDoesItTakesForAnAnswer,
        hldtAnswer,
        whereToFindCookiesAndUserAgreement
    } = faq;
    const FAQ = faq.faq;
    const { sendEmail, signContent, signEmail, signIssue } = softwareInfo;

    return (
        <div className="container">
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-header bg-dark">
                        <div className="card-title text-white">
                            <i className="far fa-envelope"></i>
                            {}
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <i className="fas fa-tag sender-icon"></i>
                                <input type="text" name="subject" className="form-control"
                                    placeholder={signIssue} required />
                            </div>
                            <div className="form-group">
                                <i className="fas fa-envelope sender-icon"></i>
                                <input type="text" name="sender" className="form-control"
                                    placeholder={signEmail} required />
                            </div>
                            <div className="form-group">
                                <i className="fas fa-info-circle sender-icon"></i>
                                <textarea name="issue" className="form-control" rows={2}
                                    placeholder={signContent} required></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success">
                                    <i className="far fa-share-square"></i> {sendEmail}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header bg-dark align-items-center">
                        <h4 className="card-title text-white">
                            <i className="fas fa-question"></i>
                            {FAQ}
                        </h4>
                    </div>
                </div>
                <div className="card-header align-items-center">
                    <QuestionComponent question={howToUploadASoftware} Answer={htuSAnswer} />
                    <QuestionComponent question={howToUploadABook} Answer={htuBAnswer} />
                    <QuestionComponent question={howLongDoesItTakesForAnAnswer} Answer={hldtAnswer} />
                    <QuestionComponent question={whereToFindCookiesAndUserAgreement} Answer={UserAgreementComponent} />
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (state: GlobalState) => ({
    language: getLanguage(state)
});

export default connect(mapDispatchToProps)(ContactUs);

interface IProps {
    language: ILanguage;
}