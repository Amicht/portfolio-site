import React from 'react'
import { en } from '../locales/en';
import { he } from '../locales/he';

const useLanguageService = () => {

    const [lang, setLang] = React.useState(en);

    const changeLanguage = (requestedLanguage: string) => {
        const languages = [he, en]
        const newLang = languages.find(l => l.fullLanguageName === requestedLanguage);
        if(newLang){
          setLang(newLang);
        }
    }

  return {
    changeLanguage,
    lang
  }
}

export default useLanguageService