import React from 'react'
import "./navbar.css";
import {Container} from 'react-bootstrap'
import {Nav, Row, Col} from "react-bootstrap"

export default function Navbar() {
  return (
    <Container fluid>


<Row>
<Col>Welcome!</Col>
</Row>

<Row>
<Nav variant="pills" defaultActiveKey="/home" className='justify-content-end'>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">About</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Work</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3">Contact</Nav.Link>
  </Nav.Item>
</Nav>
</Row>



    </Container>
  )
}
