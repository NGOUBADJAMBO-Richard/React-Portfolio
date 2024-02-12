import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary justify-content-between"
      sticky="top"
    >
      <Container className=" justify-content-between">
        <Navbar.Brand href="#home">Richard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" onClick={() => handleScroll("Home")}>
              Home
            </Link>
            <Link className="nav-link" onClick={() => handleScroll("About")}>
              About
            </Link>
            <Link className="nav-link" onClick={() => handleScroll("Works")}>
              Works
            </Link>
            <Link className="nav-link" onClick={() => handleScroll("Resume")}>
              Resume
            </Link>
            <Link className="nav-link" onClick={() => handleScroll("Contact")}>
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

{
  /* <Link className='nav-link'  to={'#Home'}>Home</Link>
<Link className='nav-link'  to={'#About'}>About</Link>
<Link className='nav-link'  to={'#Works'}>Works</Link>
<Link  className='nav-link' to={'#Resume'}>Resume</Link>
<Link className='nav-link'  to={'#Contact'}>Contact</Link> */
}
export default Header;
