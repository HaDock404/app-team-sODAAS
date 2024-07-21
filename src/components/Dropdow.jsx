import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import '../styles/dropdown.css'
import WorldIcon from './WorldIcon.jsx'

function Dropdown() {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div class="dropdown">
            <div>
                <WorldIcon />
                <button className="dropbtn">{language.toUpperCase()}</button>
            </div>
            <div className="dropdown-content">
                <a onClick={() => handleLanguageChange('en')}>EN</a>
                <a onClick={() => handleLanguageChange('fr')}>FR</a>
            </div>
        </div>
    )
}

export default Dropdown