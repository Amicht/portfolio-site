import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { sections } from '../../utils/sections';
import React from 'react';

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
    <Navbar bg="light" expanded={expanded} expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand >AMIT LICHT</Navbar.Brand>
        <Navbar.Toggle onClick={handleExpendedOnClick}  aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {sections.map((sec,idx) => 
            <Nav.Link 
              key={sec.id} 
              onClick={() => {handleClickScroll(sec.id)}}>
                {sec.txt}
            </Nav.Link>)}
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;