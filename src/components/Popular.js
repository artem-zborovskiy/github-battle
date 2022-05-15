import React from "react";
import { fetchPopularRepos } from '../utils/api.js';
import { SelectedLanguages } from './SelectedLanguages.js';
import { Repos } from './Repos.js';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null,
            hasError: false
        }

        this.selectLanguage = this.selectLanguage.bind(this);
    }

    fetchHandler(language) {
        fetchPopularRepos(language)
            .then(data => {
                this.setState({repos: data, hasError: false})
            })
            .catch((error) => {
                console.error(error);
                this.setState({hasError: true});
            })
    }

    componentDidMount() {
        this.fetchHandler(this.state.selectedLanguage);
    }

    selectLanguage(language) {
        if(language !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: language, repos: null});
            this.fetchHandler(language);
        }
    }

    render() {
        if(this.state.hasError) {
            return(
                <div>
                    <SelectedLanguages
                        selectedLanguage = {this.state.selectedLanguage}
                        selectLanguageHandler = {this.selectLanguage}
                    />
                    <h2 className="error-msg">There was an error fetching the repositories.</h2>
                </div>
            )
        } else {
            return(
                <div>
                    <SelectedLanguages
                        selectedLanguage = {this.state.selectedLanguage}
                        selectLanguageHandler = {this.selectLanguage}
                    />
                    {this.state.repos ? <Repos repos={this.state.repos} /> : <span className="loader"></span>}
                </div>
            )
        }
    }
}

export default Popular;