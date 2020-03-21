import * as React from 'react';
import ILanguage from '../../redux/language/Lang';
import { connect } from 'react-redux';
import GlobalState from '../../redux/State';
import { getLanguage } from '../../redux/language/LangSelector';
import './Error.scss';

const Error: React.FC<IProps> = ({ language: { errors: { error404 } } }) => {
    return (
        <div className="d-flex align-content-center text-center">
            <div className="container offset-4">
                <div className="error">
                    <h1>404</h1>
                    <h2>error</h2>
                    <p style={{ color: "black" }}>{error404}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: GlobalState) => ({
    language: getLanguage(state)
});

export default connect(mapStateToProps)(Error);

interface IProps {
    language: ILanguage;
}
