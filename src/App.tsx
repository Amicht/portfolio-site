import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_colors.scss';
import MyProjects from './components/my-projects/MyProjects';
import MyFooter from './components/my-footer/MyFooter';
import 'aos/dist/aos.css';
import AOS from 'aos';
import IntroSection from './components/intro-section/IntroSection';
import SkillsSection from './components/skills/SkillsSection';
import { ThemeCtxt, themes } from './context/ThemeCtxt';
import OffCanvasNavbar from './components/my-navbar/OffcanvasNavbar';
import AboutSection from './components/about-section/AboutSection';
import { LanguageCtxt } from './context/LanguageCtxt';
import { en } from './locales/en';
import { he } from './locales/he';


function App() {

  const [theme, setTheme] = React.useState({dark: themes.light, light:themes.dark});
  const [lang, setLang] = React.useState(en);
  const [isChecked, setIsChecked] = React.useState(false);
  const [scrollTo, setScrollTo] = React.useState("");

  const changeLanguage = (requestedLanguage: string) => {
      const languages = [he, en]
      const newLang = languages.find(l => l.fullLanguageName === requestedLanguage);
      if(newLang){
        setLang(newLang);
      }
  }

  React.useEffect(() => { AOS.init()},[]);
  
  const changeTheme = () => {
    if(isChecked) {
      setTheme({dark: themes.light, light:themes.dark})
    }
    else{
      setTheme(themes);
    }
    setIsChecked(!isChecked)
  }

  const handleClickScroll = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  };

  React.useEffect(() => {
    if(!!scrollTo){ handleClickScroll(scrollTo); setScrollTo("") }
      
  },[scrollTo])

  return (
    <div dir={lang.dir}>
      <LanguageCtxt.Provider value={{lang, changeLang:changeLanguage}}>

        <ThemeCtxt.Provider value={theme}>

          <OffCanvasNavbar chngeThemeHndler={changeTheme} setScrollTo={setScrollTo}/>

          <IntroSection />

          <SkillsSection />

          <AboutSection />

          <MyProjects />

          <MyFooter />

        </ThemeCtxt.Provider>

      </LanguageCtxt.Provider>
    </div>
  );
}

export default App;
