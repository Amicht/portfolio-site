import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/_colors.scss';
import MyProjects from './components/my-projects/MyProjects';
import MyFooter from './components/my-footer/MyFooter';
import 'aos/dist/aos.css';
import AOS from 'aos';
import IntroSection from './components/intro-section/IntroSection';
import SkillsSection from './components/skills/SkillsSection';
import OffCanvasNavbar from './components/my-navbar/OffcanvasNavbar';
import AboutSection from './components/about-section/AboutSection';
import { ThemeCtxt } from './context/ThemeCtxt';
import { LanguageCtxt } from './context/LanguageCtxt';
import useLanguageService from './custom-hooks/useLanguageService';
import useThemeService from './custom-hooks/useThemeService';


function App() {

  const { changeLanguage, lang } = useLanguageService();
  const { changeTheme, theme } = useThemeService();

  useEffect(() => { AOS.init()},[]);

  return (
    <div dir={lang.dir}>

      <LanguageCtxt.Provider value={{lang, changeLang:changeLanguage}}>

        <ThemeCtxt.Provider value={theme}>

          <OffCanvasNavbar changeThemeHandler={changeTheme}/>

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
