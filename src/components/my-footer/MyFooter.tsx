import React from 'react'
import { ThemeCtxt } from '../../context/ThemeCtxt';
import ContactComponent from '../contact-component/ContactComponent'
import './my-footer.scss'

const MyFooter = () => {
  const {light: {backgroundColor,color}} = React.useContext(ThemeCtxt);
  


  return (
    <section style={{backgroundColor, color}} className='footer-section pt-5 pb-2'>
      <div className="container mt-0 pb-0">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0">© 2023 Amit Licht</span>
          </div>

          <ContactComponent color={color} alignEnd={true}/>
        </footer>
      </div>
    </section>
  )
}

export default MyFooter