import React, {  useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ThemeCtxt } from '../../context/ThemeCtxt';
import { navBarSections } from '../../utils/sections';
import ContactComponent from '../contact-component/ContactComponent';
import './costum-switch.scss';
import './offcanvas-navbar.scss';
import { Fade as Hamburger } from 'hamburger-react'


interface Props{
    chngeThemeHndler: () => void
    setScrollTo: (value: React.SetStateAction<string>) => void
}


const OffCanvasNavbar = ({chngeThemeHndler,setScrollTo}:Props) => {
    const {dark: {backgroundColor,color}} = React.useContext(ThemeCtxt);
    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true)};

    const onSectionClick = (sectionId:string) => {
      setScrollTo(sectionId);
      setTimeout(() => handleClose(), 200);
    }

  return (
    <section style={{backgroundColor, color}} className="py-1 sticky-top">
    <div className='container d-flex justify-content-end'>
    <div  className='d-flex container my-auto fs-3 ms-0 ps-0' >
        <ContactComponent color={color} />
    </div>
      <label className="costum-switch my-2 px-4" >
        <input type="checkbox" onClick={chngeThemeHndler} />
        <span style={{backgroundColor:color}} className="slider round"></span>
      </label>
      {/* <div onClick={handleShow} >
        <Hamburger size={36} toggled={show}/>
      </div> */}

      {/* <Offcanvas show={show} onHide={handleClose} style={{backgroundColor}}>
        <Offcanvas.Header>
            <i 
              className="bi bi-x-lg close-icon" 
              onClick={handleClose}
              style={{color}}></i>
        </Offcanvas.Header>
        <Offcanvas.Body >

        {navBarSections.map((sec,idx) => 
            <div><Link to={"/hash-scroll#" + sec.id}
                className='my-2 nav-title'
              style={{color}}
              key={sec.id} >
                {sec.txt}
            </Link></div>)}
            <div style={{color}} className='mt-5'>{"Contact Me:"}</div>
            <div  className='d-flex container mt-4 ms-0 ps-0' >
              <ContactComponent color={color} />
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}
    </div>
    </section>
  );
}


export default OffCanvasNavbar;