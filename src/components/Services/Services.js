import React from "react";
import { Accordion, Card,  } from "react-bootstrap";

const Services = () => {
  return (
    <section id="services" className="section-services">
      <Accordion defaultActiveKey="0" className="accordion">
        <Card className="accordion-header">
          <Accordion.Toggle as={Card.Header} eventKey="0" className={"card-header"}>
            Titulo 1
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="card-body">
              It is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1" className="accordion-header">
            Titulo 2
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              It is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Titulo 3
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              It is hidden by default, until the collapse plugin adds the
              appropriate classes that we use to style each element. These
              classes control the overall appearance, as well as the showing and
              hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting
              that just about any HTML can go within the
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </section>
  );
};

export default Services;
