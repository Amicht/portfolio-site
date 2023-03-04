import React from 'react'
import './intro-section.scss';
import Typed from 'react-typed';
import { navBarSections } from '../../utils/sections';
import { ThemeCtxt } from '../../context/ThemeCtxt';
import { techTools } from '../../utils/techTools';

const IntroSection = () => {

  const {dark: {backgroundColor,color}} = React.useContext(ThemeCtxt);
  const title = "Amit Licht";
  const subtitle = "Full-Stack Developer";
  const myTechStack = 'myTechStack='
  const strings = Object.values(techTools);
  const navs = [
    {
      txt: "who am I?",
      id: navBarSections[1].id
    },
    {
      txt: "projects",
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
          <h3 className='mt-5 text-start'>
             {myTechStack + "{ "} 
             <Typed 
              className='fs-1 typed-txt'
              strings={strings}
              typeSpeed={70}
              backSpeed={20}
              loop/>{"}"}
          </h3>


          
          {/* <div className='mt-5 mb-5 go-down-btn text-info px-1 mx-auto'>
              <i onClick={() => handleClickScroll(navBarSections[0].id)} 
                className="fa fa-arrow-down"></i>
          </div> */}

          <div className='mt-5 d-flex px-auto'>
            {navs.map((n, idx) => 
            <div key={idx} onClick={() => handleClickScroll(n.id)}
            className='text-info px-3 intro-navs'>
              <span className='hover-underline-animation'>{n.txt}</span>
            </div>)}
          </div>
      </div>


    </section>
  )
}

export default IntroSection