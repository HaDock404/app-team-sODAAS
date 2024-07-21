import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function TextComponent() {
    const { language } = useContext(LanguageContext);

    const texts = {
        en: 'Hello, world!',
        fr: 'Bonjour, le monde!'
    };

    return <p>{texts[language]}</p>;
}

export default TextComponent;