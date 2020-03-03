import * as React from 'react';
import { getLanguage } from '../../redux/language/LangSelector';
import GlobalState from '../../redux/State';
import { connect } from 'react-redux';
import ILanguage from '../../redux/language/Lang';

const UserAgreement: React.FC<IProps> = ({ language: { userAgreementPolicy, faq: { wtfcAnswer } } }) => {

    const {
        userAgreementModal,
        userAgreementTitle,
        userAgreementPolicyTitle,
        userAgreementPrivacyPolicyFP,
        userAgreementPrivacyPolicySP,
        userAgreementReceivedDataTitle,
        userAgreementReceivedData,
        userAgreementDataUseTitle,
        userAgreementDataUseFP,
        userAgreementDataUseSP,
        userAgreementCookiesFP,
        userAgreementCookiesSP,
        userAgreementCookiesTP,
        userAgreementThirdPartyLinksTitle,
        userAgreementThirdPartyLinks,
        userAgreementPersonalInformationControlTitle,
        userAgreementPersonalInformationControl,
        userAgreementAccept,
        userAgreementDecline
    } = userAgreementPolicy;

    /**
     * FP - SP stands for align of paragraphs. FirstParagraph - Second Paragraph
     */

    return (
        <div>
            <p className="lead">{wtfcAnswer}</p>
            <button
                className="btn btn-primary"
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
            >
                {userAgreementModal}
            </button>
            <div className="modal fade bd-example-modal-lg" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                {userAgreementTitle}
                            </h5>
                        </div>
                        <div className="modal-bod">
                            <p style={{ fontWeight: 700 }}>
                                {userAgreementPolicyTitle}
                            </p>
                            <span>
                                {userAgreementPrivacyPolicyFP}
                            </span>
                            <br />
                            <span>
                                {userAgreementPrivacyPolicySP}
                            </span>
                            <br />

                            <p style={{ fontWeight: 700 }}>
                                {userAgreementReceivedDataTitle}
                            </p>
                            <span>
                                {userAgreementReceivedData}
                            </span>
                            <br />

                            <p style={{ fontWeight: 700 }}>
                                {userAgreementDataUseTitle}
                            </p>
                            <span>
                                {userAgreementDataUseFP}
                            </span>
                            <br />
                            <span>
                                {userAgreementDataUseSP}
                            </span>

                            <p style={{ fontWeight: 700 }}>
                                Cookies
                            </p>
                            <span>
                                {userAgreementCookiesFP}
                            </span>
                            <br />
                            <span>
                                {userAgreementCookiesSP}
                            </span>
                            <span>
                                {userAgreementCookiesTP}
                            </span>
                            <br />

                            <p style={{ fontWeight: 700 }}>
                                {userAgreementThirdPartyLinksTitle}
                            </p>
                            <span>
                                {userAgreementThirdPartyLinks}
                            </span>
                            <br />

                            <p style={{ fontWeight: 700 }}>
                                {userAgreementPersonalInformationControlTitle}
                            </p>
                            <span>
                                {userAgreementPersonalInformationControl}
                            </span>
                            <br />
                        </div>
                        <div className="modal-foote">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">
                                {userAgreementDecline}
                            </button>
                            <button type="button"
                                className="btn btn-primary">
                                {userAgreementAccept}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    language: getLanguage(state)
});

export default connect(mapStateToProps)(UserAgreement);

interface IProps {
    language: ILanguage;
}