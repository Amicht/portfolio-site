import React from 'react'
import './intro-section.scss';
import Typed from 'react-typed';
import { navBarSections } from '../../utils/sections';
import { ThemeCtxt } from '../../context/ThemeCtxt';
import { techTools } from '../../utils/techTools';
import { LanguageCtxt } from '../../context/LanguageCtxt';

const IntroSection = () => {

  const theme = React.useContext(ThemeCtxt);
  const langCtxt = React.useContext(LanguageCtxt);
  const {dark: {backgroundColor,color, isBgDark}} = theme;
  const sectionTxts = langCtxt.lang.sections.intro;
  const { title, subtitle, myTechStack } = sectionTxts;
  const strings = Object.values(techTools);
  const navs = [
    {
      txt: sectionTxts.whoAmI,
      id: navBarSections[1].id
    },
    {
      txt: sectionTxts.projects,
      id: navBarSections[2].id
    }
  ]

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
              className='mt-2 text-center'>{title}</h1>
          <h2 
              data-aos="fade-left"  
              data-aos-duration="1800"
              className='mt-2 text-center'>{subtitle}</h2>
          <p dir='ltr' className='mt-5 text-center fs-2 fw-bold'>
             {myTechStack + "{ "} 
             <Typed 
              className='fs-1 typed-txt'
              strings={strings}
              typeSpeed={70}
              backSpeed={20}
              loop/>{"}"}
          </p>

          <div className='mt-5 d-flex px-auto'>
            {navs.map((n, idx) => 
            <div key={idx} onClick={() => handleClickScroll(n.id)}
              className={`px-3 intro-navs`}>
              <span className={`hover-underline-animation ${isBgDark? 'text-dark': 'text-info'}`}>{n.txt}</span>
            </div>)}
          </div>
      </div>


    </section>
  )
}

export default IntroSection