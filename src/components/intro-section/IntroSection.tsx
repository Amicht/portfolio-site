import React from 'react'
import './intro-section.scss';

const IntroSection = () => {

  const title = "Amit Licht";

  const handleClickScroll = () => {
    const element = document.getElementById('section-2');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="section-1"  className='intro-section py-5'>
      
      <div 
        className='container text-center text-primary'>

          <h1 className='fs-1 fw-bold'>{title}</h1>
          {/* <button 
            onClick={handleClickScroll} 
            className='btn btn-info text-light fs-2 projets-btn'>Projects</button> */}
      </div>

      <div className="custom-shape-divider-bottom-1676575100">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill"></path>
          </svg>
      </div>

    </section>
  )
}

export default IntroSection