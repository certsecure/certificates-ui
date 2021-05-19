import React from 'react';
import './App.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

function App() {
  return (
      <Container>
        <Row>
          <Col><h1>CertSecu.re</h1></Col>
        </Row>
          <Row>
              <Col>              <h2>My Certificates</h2>
              </Col>
          </Row>
          <Row>
              <Col>
              <Card>
                  <Card.Body className="pb-2">
                      <Card.Title className="mb-1">Advanced First Aid<small className="text-muted" style={{float:"right", fontSize:"60%"}}>Exp: 23/06/2021</small></Card.Title>
                      <Card.Subtitle className="mb-0 text-muted">St. John Ambulance</Card.Subtitle>
                      <Button variant="link" style={{float:"right"}}>Details</Button>&nbsp;
                  </Card.Body>

              </Card>
              </Col>
          </Row>
      </Container>
  );
}

export default App;
