import React from 'react'
import ContactComponent from '../contact-component/ContactComponent'
import './my-footer.scss'

const MyFooter = () => {

  


  return (
    <section className='bg-dark pt-5 pb-2'>
      <div className="container bg-dark mt-0 pb-0">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24"></svg>
            </a>
            <span className="mb-3 mb-md-0 text-muted">© 2023 Amit Licht</span>
          </div>

          <ContactComponent />
        </footer>
      </div>
    </section>
  )
}

export default MyFooter