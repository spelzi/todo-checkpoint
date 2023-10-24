import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const NavBar = ({ onFilterTitle }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">All Blog</Nav.Link>
            <Nav.Link href="#">Delete</Nav.Link>
          </Nav>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="titleFilter">
                  <Form.Control
                    type="text"
                    placeholder="Filter by title"
                    onChange={(e) => onFilterTitle(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
