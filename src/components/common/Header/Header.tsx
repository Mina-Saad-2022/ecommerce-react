import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header>
      <div>
        <h3>
          our <Badge bg="success">Ecom</Badge>{" "}
        </h3>
      </div>
      {/* basket */}

      <div>
        <Navbar
          expand="lg"
          className="rounded bg-body-tertiary"
          bg="dark"
          data-bs-theme="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Categories</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#home">Logn</Nav.Link>
                <Nav.Link href="#link">Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export { Header };
