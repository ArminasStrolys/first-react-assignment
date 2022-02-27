import React from "react";
import "./content.css";
import Sidenote from '../sidenote/Sidenote';
import { Container, Row, Col } from "react-bootstrap";

export default function Content() {
  return (
    <Container fluid className="main-container">
      <Row className="col-md-auto">
        <Col className="red-banner">
          <span>Welcome!</span>
        </Col>
      </Row>
      <Row>
        <Col className="col-md-7 text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            ipsam mollitia explicabo eius? Dolor, voluptas libero ut
            voluptatibus et laboriosam, optio soluta explicabo aperiam, minima
            quam suscipit consequatur veniam sed. Debitis eveniet alias mollitia
            vero qui similique iste neque quae architecto ad consequuntur, minus
            tempore in quisquam et iusto vel! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Asperiores ex aut ullam iure
            perspiciatis deleniti, voluptate quo molestiae est laudantium!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis optio necessitatibus voluptatem dolorum voluptas est
            sint cum esse consequuntur ullam placeat doloribus, repellat
            eligendi sapiente odit in voluptates asperiores laboriosam
            architecto exercitationem vel nesciunt labore ab officia. Saepe
            aspernatur explicabo voluptate?
          </p>
        </Col>
        <Col className="offset-md-1 justify-content-end">
          <Sidenote />
        </Col>
      </Row>
    </Container>
  );
}
