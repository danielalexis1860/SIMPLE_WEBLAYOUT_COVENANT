import React from "react";
import { Container, Button } from "react-bootstrap";

function CTA() {
  return (
    <section className="py-5 text-center bg-primary text-light">
      <Container>
        <h2>Call to action! It's time!</h2>
        <p>Sign up for our product by clicking that button right over there!</p>
        <Button variant="light">Sign up</Button>
      </Container>
    </section>
  );
}

export default CTA;
