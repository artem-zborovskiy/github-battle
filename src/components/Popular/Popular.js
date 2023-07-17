import React from "react";
import { connect } from "react-redux";
import { SelectedLanguages } from './SelectedLanguages.js';
import { Repos } from './Repos.js';
import { setSelectedLanguage } from "../../redux/actions/popular.actions.js";
import { fetchPopularReposThunk } from '../../redux/thunk/popular.thunk.js';

const mapStateToProps = ({popularReducer}) => ({
    selectedLanguage: popularReducer.selectedLanguage,
    repos: popularReducer.repos,
    error: popularReducer.error
});

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.selectLanguage = this.selectLanguage.bind(this);
    }

    componentDidMount() {
        this.fetchHandler(this.props.selectedLanguage);
    }

    fetchHandler(language) {
        this.props.dispatch(fetchPopularReposThunk(language));
    }

    selectLanguage(language) {
        if(language !== this.props.selectedLanguage) {
            this.props.dispatch(setSelectedLanguage(language));
            this.fetchHandler(language);
        }
    }

    render() {
        if(this.props.error) {
            return(
                <div>
                    <SelectedLanguages
                        selectedLanguage = {this.props.selectedLanguage}
                        selectLanguageHandler = {this.selectLanguage}
                    />
                    <h2 className="error-msg">There was an error fetching the repositories.</h2>
                </div>
            )
        } else {
            return(
                <div>
                    <SelectedLanguages
                        selectedLanguage = {this.props.selectedLanguage}
                        selectLanguageHandler = {this.selectLanguage}
                    />
                    {this.props.repos ? <Repos repos={this.props.repos} /> : <span className="loader"></span>}
                </div>
            )
        }
    }
}

export default connect(mapStateToProps)(Popular);