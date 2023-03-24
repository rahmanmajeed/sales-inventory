import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SwitchLang from "../../components/SwitchLang";

const AuthNavbar = () => {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" className="navbar-dark">
        <Container>
          <Navbar.Brand>React Auth Demo</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <SwitchLang />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};

export default AuthNavbar;
