import React from 'react'
import './intro-section.scss';
import Typed from 'react-typed';
import { navBarSections } from '../../utils/sections';
import { ThemeCtxt } from '../../context/ThemeCtxt';

const IntroSection = () => {

  const {dark: {backgroundColor,color},light} = React.useContext(ThemeCtxt);
  const title = "Amit Licht";
  const info = [
    "Web Developer",
    "Passionate Programmer",
    "Creative Mind",
    "Bass Player",
    "People Person",
    "Self Motivated",
    "Helper",
    "Challenge Seeker"
  ]
  const aboutMe = 'aboutMe='
  const strings = info.map(txt =>"\"" + txt + "\"");

  const handleClickScroll = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{backgroundColor,color}} 
      className='intro-section py-5'>
      
      <div className='container text-start'>

          <h1 
              data-aos="fade-left"  
              data-aos-duration="1800"
              className='mt-2'>{title}</h1>
          <h2 className='mt-5 text-start'>
             {aboutMe + "{ "} 
             <Typed 
              className='fs-1 typed-txt'
              strings={strings}
              typeSpeed={50}
              backSpeed={30}
              loop/>{"}"}
          </h2>

          
          <div className='mt-5 mb-5 go-down-btn text-info px-1 mx-auto'>
              <i onClick={() => handleClickScroll(navBarSections[0].id)} 
                className="fa fa-arrow-down"></i>
          </div>
      </div>


    </section>
  )
}

export default IntroSection