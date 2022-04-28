import React from "react";
import { fetchPopularRepos } from '../utils/api.js';
import { SelectedLanguages } from './SelectedLanguages.js';
import { Repos } from './Repos.js';

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }

        this.selectLanguage = this.selectLanguage.bind(this);
    }

    fetchHandler(language) {
        fetchPopularRepos(language)
            .then(data => {
                this.setState({repos: data})
            })
            .catch(error => console.error(error))
    }

    componentDidMount() {
        this.fetchHandler(this.state.selectedLanguage);
    }

    selectLanguage(language) {
        this.setState({selectedLanguage: language});
        this.fetchHandler(language);
    }

    render() {
        console.log('Popular trigger');

        return(
            <div>
                <SelectedLanguages
                    selectedLanguage = {this.state.selectedLanguage}
                    selectLanguageHandler = {this.selectLanguage}
                />
                {this.state.repos ? <Repos repos = {this.state.repos} /> : null}
            </div>
        )
    }
}

export default Popular;