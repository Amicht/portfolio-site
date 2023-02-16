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

function App() {

  React.useEffect(() => { AOS.init()},[]);

  return (
    <div className="">
        <IntroSection />
        <SkillsSection />
        <MyProjects key={"projects"} />
        <MyFooter />
    </div>
  );
}

export default App;
