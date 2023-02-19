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
import MyNavbar from './components/my-navbar/MyNavbar';
import { ThemeCtxt, themes } from './context/ThemeCtxt';


function App() {

  const [theme, setTheme] = React.useState(themes);
  const [isChecked, setIsChecked] = React.useState(false);
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

  return (
    <div className="">
      <ThemeCtxt.Provider value={theme}>

        <MyNavbar chngeThemeHndler={changeTheme}/>
        <IntroSection />
        <SkillsSection />
        <MyProjects />
        <MyFooter />
      </ThemeCtxt.Provider>
    </div>
  );
}

export default App;
