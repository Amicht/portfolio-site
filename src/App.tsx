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


function App() {

  const [theme, setTheme] = React.useState(themes);
  const [isChecked, setIsChecked] = React.useState(false);
  const [scrollTo, setScrollTo] = React.useState("");

  React.useEffect(() => { AOS.init()},[]);
  
  const changeTheme = () => {
    if(isChecked) {
      setTheme(themes)
    }
    else{
      setTheme({dark: themes.light, light:themes.dark});
    }
    setIsChecked(!isChecked)
  }

  const handleClickScroll = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({});
    }
  };

  React.useEffect(() => {
    if(!!scrollTo){ handleClickScroll(scrollTo); setScrollTo("") }
      
  },[scrollTo])

  return (
    <div className="">
      <ThemeCtxt.Provider value={theme}>

        <OffCanvasNavbar 
          chngeThemeHndler={changeTheme}
          setScrollTo={setScrollTo}/>
        <IntroSection />
        <SkillsSection />
        <MyProjects />
        <MyFooter />
      </ThemeCtxt.Provider>
    </div>
  );
}

export default App;
