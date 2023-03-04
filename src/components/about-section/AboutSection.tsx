import React from 'react'
import { ThemeCtxt } from '../../context/ThemeCtxt';
import { navBarSections } from '../../utils/sections';
import './about-section.scss';


const AboutSection = () => {

    const {dark: {backgroundColor,color}} = React.useContext(ThemeCtxt);

    const titles = {
        whoAmI: "WHO AM I?",
        techStack: "MY TECH-STACK:",
        myStrength: "MY STRENGTH:"
    }
    const myStrength = [
      "Passionate programmer",
      "Highly motivated",
      "Spend at least 6 hours every day coding and learning",
      "Love to teach, share knowledge and help others",
      "Creative mind",
      "Can-do attitude",
      "Challenge seeker"
    ]
    const description = [
      "I am a full-stack developer with hands-on experience in E2E development as a freelance and on personal projects.",
      "I've spend 12 years working as a musician - performing, composing and managing rehearsals.",
      "As a former artist, I have an eye for design, enthusiasm and I know how to be a good service provider.",
      "I never give up when it comes to problem solving and making sure the job is done the best way possible."
    ]

    const techDescription = [
      {
        area: "Frontend",
        tools: ["JavaScript","TypeScript","ReactJS","AngularJS", "Bootstrap", "HTML5", "CSS3"]
      },
      {
        area: "Backend",
        tools: ["NodeJS", "ExpressJS", "Socket.io", "Rest-api"]
      },
      {
        area: "Database",
        tools: ["MySql", "MongoDB", "Firebase"]
      }
    ]
    
  return (
    <section id={navBarSections[1].id} style={{backgroundColor,color}} 
      className='about-section py-5'>

        <div data-aos="fade-up"
            data-aos-duration="1200" 
            className='container text-center'>

          <div 
          data-aos="fade-up"
          data-aos-duration="1200" 
            className=' pt-5 pb-3'>
            <img 
                className='portfolio-img' 
                src={'/images/portfolio-img.png'} 
                alt={"portfolio-img"} />
          </div>
          <div  data-aos="fade-up"
              data-aos-duration="1200" >
              <h2 className='mb-3 mt-5'>{titles.whoAmI}</h2>
              <div className='col-sm-10 mx-auto text-start'>{description.map((s,idx) => <div key={idx}>{s}</div>)}</div>
          </div>

          <div data-aos="fade-up"
              data-aos-duration="1200" >
              <h3 className='mb-3 mt-5'>{titles.techStack}</h3>
              <div className='col-sm-7 mx-auto text-start'>
                {techDescription.map((s,idx) => 
                <div className='my-2' key={idx}>
                <span className='fs-5 fw-bold text-info'>{s.area}: </span>
                  {s.tools.join(", ")}
                </div>)}
              </div>
          </div>

          <div data-aos="fade-up"
              data-aos-duration="1200" >
              <h3 className='mb-3 mt-5'>{titles.myStrength}</h3>
              <div className='col-sm-7 mx-auto text-start'>{myStrength.map((s,idx) => 
                <div key={idx}>
                  <i className="fa fa-arrow-right text-info"></i> {s}</div>)}</div>
          </div>
        </div>

        <div className="custom-shape-divider-top-1676596099">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{fill:color}}></path>
          </svg>
      </div>

      </section>
  )
}

export default AboutSection