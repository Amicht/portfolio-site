import {Container, Navbar, Nav, ToggleButton, Form} from 'react-bootstrap/';
import { navBarSections } from '../../utils/sections';
import React from 'react';
import ContactComponent from '../contact-component/ContactComponent';
import './my-navbar.css';
import { ThemeCtxt } from '../../context/ThemeCtxt';

interface Props{
  chngeThemeHndler: () => void
}

function MyNavbar({chngeThemeHndler}:Props) {

  const {dark: {backgroundColor,color}} = React.useContext(ThemeCtxt);


  const [expanded, setExpanded] = React.useState(false);
  

  const handleExpendedOnClick = ()=> setExpanded(expanded? false : true);

    const handleClickScroll = (sectionId:string) => {
        handleExpendedOnClick();
        
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <Navbar style={{backgroundColor, color}} expanded={expanded} expand="lg" sticky='top'>
      <Container>
        {/* <Navbar.Brand onClick={() => window.scrollTo(0,0)} style={{color}}>AMIT LICHT</Navbar.Brand> */}
        <Navbar.Toggle style={{color}} onClick={handleExpendedOnClick}  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >


          <Nav className="me-auto">
            {navBarSections.map((sec,idx) => 
            <Nav.Link 
              style={{color}}
              key={sec.id} 
              onClick={() => {handleClickScroll(sec.id)}}>
                {sec.txt}
            </Nav.Link>)}
          </Nav>
          <Nav onClick={handleExpendedOnClick}  className='d-flex container justify-content-end'>
              <ContactComponent color={color}/>
              <Form className='ps-2'>
                <Form.Check 
                  style={{color}}
                  type="switch"
                  id="custom-switch"
                  onClick={() => {chngeThemeHndler(); handleExpendedOnClick()}}
                />
              </Form>
          </Nav>

          <Nav>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;