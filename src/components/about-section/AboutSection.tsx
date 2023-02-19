import React from 'react'
import { ThemeCtxt } from '../../context/ThemeCtxt';

const AboutSection = () => {

    const {light: {backgroundColor,color}} = React.useContext(ThemeCtxt);

    const titles = {
        whoAmI: "WHO AM I?",
        techStack: "MY TECH-STACH INCLUDES:",
        
    }
    const description = "I'm Amit Licht, A web developer"
    
  return (
    <section style={{backgroundColor,color}} 
      className='about-section py-5'>

        <div className='container text-start'>
            
        </div>

      </section>
  )
}

export default AboutSection