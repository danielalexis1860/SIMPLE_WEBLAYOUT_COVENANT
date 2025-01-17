import React from "react";
import { Container } from "react-bootstrap";

function Testimonial() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <blockquote className="blockquote text-center">
          <p className="mb-4">
            This is an inspiring quote, or a testimonial from a customer. Maybe
            it's just filling up space, or maybe people will actually read it.
            Who knows? All I know is that it looks nice.
          </p>
          <footer className="blockquote-footer">
            Thor, <cite>God of Thunder</cite>
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}

export default Testimonial;
