import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';


function ResearchContent(props) {
  return (
    <Container className="mt-5">
      <Card className="mb-3" style={{ maxWidth: '100%',backgroundColor:'white'}}>
        <Row className="g-5">
          <Col md={4} className="bg-secondary d-flex align-items-center justify-content-center text-light">
            <Card.Img src={props.picture} style={{ height: '200px', width: 'auto', objectFit: 'cover',background:'white'}} />
          </Col>
          <Col md={8}>
            <Card.Body g-10>
              <Card.Title><strong>{props.title}</strong></Card.Title>
              <Card.Text>
              <a>{props.describe}</a>
                <ul>
                  <li>{props.line1}</li>
                  <li>{props.line2}</li>
                  <li>{props.line3}</li>
                  <li>{props.line4}</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ResearchContent;
