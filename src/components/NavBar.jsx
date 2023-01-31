import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/dashboard">
          Gestions Des Voitures
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/dashboard">
            Dashboard
          </Nav.Link>
          <Nav.Link as={NavLink} to="/addnew">
            Ajouter Voiture
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
