import {useContext, Fragment} from 'react'
import { ThemeCtxt } from '../../context/ThemeCtxt';
import { navBarSections } from '../../utils/sections';
import './about-section.scss';
import { techTools } from '../../utils/techTools';
import { LanguageCtxt } from '../../context/LanguageCtxt';


const AboutSection = () => {

  const langCtxt = useContext(LanguageCtxt);
  const {dark: {backgroundColor,color}} = useContext(ThemeCtxt);
  const pageTxts = langCtxt.lang.sections.about;
  const { titles, myStrength, description } = langCtxt.lang.sections.about;
  const { node, mysql, mongodb, rest_api, express, js, ts, next, react, angular, bootstrap, html, css, } = techTools;

  const techDescription = [
    {
      area: pageTxts.frontend,
      tools: [html, css, js, ts, next, react, angular, bootstrap]
    },
    {
      area: pageTxts.backend,
      tools: [node,express,  rest_api, "Socket.io"]
    },
    {
      area: pageTxts.database,
      tools: [mysql, mongodb, "Firebase", "Airtable"]
    }
  ]

  const textAlignClassName = langCtxt.lang.dir === 'ltr'? 'text-start': 'text-end';
    
  return (
    <section id={navBarSections[1].id} style={{backgroundColor,color}} 
      className='about-section py-5'>

        <div 
          data-aos="fade-up"
          data-aos-duration="1200" 
          className='container text-center'>

          <div 
            data-aos="fade-up"
            data-aos-duration="1200" 
            className='potfolio-img-wrapper mt-5 mb-3 mx-auto'>

            <img 
              className='portfolio-img' 
              loading='lazy'
              src={'/images/portfolio-img.png'} 
              alt={"portfolio-img"} />
          </div>

          <div data-aos="fade-up" data-aos-duration="1200" >

            <h2 className='mb-3 mt-5 fs-1'>{titles.whoAmI}</h2>

            <p className={`col-sm-10 fs-4 mx-auto ${textAlignClassName}`}>
              { 
                description.map((s,idx) => <Fragment key={idx}>{s}<br/></Fragment>) 
              }
            </p>

          </div>

          <div data-aos="fade-up"
              data-aos-duration="1200" >

            <h3 className='mb-3 mt-5 fs-2'>{titles.techStack}</h3>

            <ul style={{listStyleType: 'none'}} className={`col-sm-7 fs-4 mx-auto ${textAlignClassName}`}>

              {
                techDescription.map((s,idx) => 
                  <li className='my-2' key={idx}>
                    <span className='fs-4 fw-bold text-info'>{s.area}: </span>
                    {s.tools.join(", ")}
                  </li>
                )
              }

            </ul>

          </div>

          <div data-aos="fade-up"
              data-aos-duration="1200" >

              <h3 className='mb-3 mt-5 fs-2'>{titles.myStrength}</h3>

              <ul style={{listStyleType: 'none'}} className={`col-sm-7 fs-4 mx-auto ${textAlignClassName}`}>
                {
                  myStrength.map((s,idx) => 
                    <li key={idx}>
                      <i className={`fa fa-arrow-${langCtxt.lang.dir === 'ltr'? 'right': 'left'} text-info`}></i> 
                      <span className='px-2'>{s}</span>
                    </li>
                  )
                }
              </ul>

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