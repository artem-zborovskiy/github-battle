import React, { memo } from "react";

export const SelectedLanguages = memo(({ selectedLanguage, selectLanguageHandler }) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return(
        <ul className="languages">
            {languages.map((language, index) => (
                <li 
                    key={index} 
                    style={selectedLanguage === language ? {color: '#D0021B'} : null}
                    onClick={() => selectLanguageHandler(language)}>
                    {language}
                </li>
            ))}
        </ul>
    )
})