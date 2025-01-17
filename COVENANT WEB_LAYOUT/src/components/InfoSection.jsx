import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function InfoSection() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Some random information.</h2>
        <Row>
          {[...Array(4)].map((_, index) => (
            <Col md={3} sm={6} key={index} className="text-center">
              <div className="border p-4">
                <div className="bg-secondary mb-3" style={{ height: "100px" }}></div>
                <p>this is some subtext under an illustration or image</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default InfoSection;
