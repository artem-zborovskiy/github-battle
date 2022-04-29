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
            isLoading : false,
            hasError: false
        }

        this.selectLanguage = this.selectLanguage.bind(this);
    }

    fetchHandler(language) {
        fetchPopularRepos(language)
            .then(data => {
                this.setState({repos: data, isLoading: false, hasError: false})
            })
            .catch((error) => {
                console.error(error);
                this.setState({hasError: true});
            })
    }

    componentDidMount() {
        this.setState({isLoading: true});
        this.fetchHandler(this.state.selectedLanguage);
    }

    selectLanguage(language) {
        this.setState({selectedLanguage: language, isLoading: true});
        this.fetchHandler(language);
    }

    render() {
        console.log('Popular trigger');

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
        } else if(this.state.isLoading) {
            return(
                <span className="loader"></span>
            )
        } else {
            return(
                <div>
                    <SelectedLanguages
                        selectedLanguage = {this.state.selectedLanguage}
                        selectLanguageHandler = {this.selectLanguage}
                    />
                    {this.state.repos ? <Repos repos={this.state.repos} /> : null}
                </div>
            )
        }
    }
}

export default Popular;