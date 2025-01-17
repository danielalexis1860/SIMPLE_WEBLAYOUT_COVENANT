import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="py-5 bg-dark text-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>This website is awesome</h1>
            <p>
              This website has some subtext that goes here under the main title.
              It's a smaller font and the color is lower contrast.
            </p>
            <Button variant="primary">Sign up</Button>
          </Col>
          <Col md={6}>
            <div className="bg-secondary p-5 text-center text-light">
              this is a placeholder for an image
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
