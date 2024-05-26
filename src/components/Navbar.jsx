import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar_esas pt-5">
      <Container>
        <Navbar.Brand href="home"><Link className='logo'>Tasty</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className='navbr_link'>
            <Link to='/'>Home</Link>
            <Link >Menu</Link>
            <Link>Specialist</Link>
            <Link>Reservation</Link>
            <Link>Blog</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link to='/Admin'>Admin</Link>
            <Link to='/Favoritler'>Favoritler</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;