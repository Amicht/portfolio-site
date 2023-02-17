import React from 'react'
import './intro-section.scss';
import Typed from 'react-typed';

const IntroSection = () => {

  const title = "Amit Licht";
  const info = [
    "Web Developer",
    "Passionate Pragrommer",
    "Creative Mind",
    "Bass Player",
    "People Person",
    "Helper",
    "Challenge Seeker"
  ]
  const aboutMe = 'aboutMe='
  const strings = info.map(txt =>"\"" + txt + "\"");


  const handleClickScroll = () => {
    const element = document.getElementById('section-2');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="section-1"  className='intro-section py-5'>
      
      <div className='container text-start text-secondary'>

          <h1 data-aos="fade-left"  
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
              <i className="fa fa-arrow-down"></i>
          </div>
      </div>


    </section>
  )
}

export default IntroSection