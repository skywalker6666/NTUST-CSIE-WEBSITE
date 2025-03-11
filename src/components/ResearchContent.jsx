import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';


function ResearchContent(props) {
  return (
    <Container className="mt-5">
      <Card className="mb-3" style={{ maxWidth: '100%',backgroundColor:'white', border:'2px solid black'}}>
        <Row className="g-5">
          <Col md={4} className=" d-flex align-items-center justify-content-center text-light">
            <Card.Img src={props.picture} style={{margin:'auto', maxWidth: '100%',maxHeight: '100%', objectFit: 'contain',display:'block'}} />
          </Col>
          <Col md={8}>
            <Card.Body g-8>
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
