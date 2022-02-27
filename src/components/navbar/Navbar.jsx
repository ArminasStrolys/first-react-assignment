import React from "react";
import "./navbar.css";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "./Goog.png";

export default function Navbar() {
  return (
    <Container fluid>
      <div class="row align-items-center margin justify-content-between">
        <div class="col-md-2">
          <img src={logo} alt="" />
        </div>
        <div class="col-lg-1 col-md-2 offset-lg-5">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Home</Nav.Link>
          </Nav.Item>
        </div>
        <div class="col-md-2 col-lg-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1">About</Nav.Link>
          </Nav.Item>
        </div>
        <div class="col-md-2 col-lg-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Work</Nav.Link>
          </Nav.Item>
        </div>
        <div class="col-md-2 col-lg-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1">Contact</Nav.Link>
          </Nav.Item>
        </div>
      </div>
    </Container>
  );
}
