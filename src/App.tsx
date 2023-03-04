import React from 'react';
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


function App() {

  const [theme, setTheme] = React.useState({dark: themes.light, light:themes.dark});
  const [isChecked, setIsChecked] = React.useState(false);
  const [scrollTo, setScrollTo] = React.useState("");

  const aboutRef = React.useRef();
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
    <>
      <ThemeCtxt.Provider value={theme}>

        <OffCanvasNavbar 
          chngeThemeHndler={changeTheme}
          setScrollTo={setScrollTo}/>
        <IntroSection />
        <SkillsSection />
        <AboutSection />
        <MyProjects />
        <MyFooter />
      </ThemeCtxt.Provider>
    </>
  );
}

export default App;
