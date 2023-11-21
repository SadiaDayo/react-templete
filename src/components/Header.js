import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark ">
      <Container>
        <Navbar.Brand className ={"text-white"} href="#home">Sadia</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  className ={"text-white"} href="#home">Projects</Nav.Link>
            <Nav.Link  className ={"text-white"} href="#link">Reviews</Nav.Link>
            <Nav.Link  className ={"text-white"} href="#link">Profiles</Nav.Link>
            <Nav.Link  className ={"text-white"} href="#link">ContactUs</Nav.Link>
            <Nav.Link  className ={"text-white"} href="#link">Footer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;