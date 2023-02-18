import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { navBarSections } from '../../utils/sections';
import React from 'react';
import ContactComponent from '../contact-component/ContactComponent';
import './my-navbar.css';

function MyNavbar() {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpendedOnClick = ()=> setExpanded(expanded? false : true);

    const handleClickScroll = (sectionId:string) => {
        handleExpendedOnClick();
        
        const element = document.getElementById(sectionId);
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <Navbar bg='secondary' expanded={expanded} expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand onClick={() => window.scrollTo(0,0)} className='text-primary'>AMIT LICHT</Navbar.Brand>
        <Navbar.Toggle onClick={handleExpendedOnClick}  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="me-auto">
            {navBarSections.map((sec,idx) => 
            <Nav.Link 
              key={sec.id} 
              onClick={() => {handleClickScroll(sec.id)}}>
                {sec.txt}
            </Nav.Link>)}
          </Nav>
          <Nav onClick={handleExpendedOnClick}  className='d-flex container justify-content-end'>
              <ContactComponent />
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;