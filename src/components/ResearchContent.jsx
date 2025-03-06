import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import chii from '../assets/chiikawa.png';

function ResearchContent() {
  return (
    <Container className="mt-5">
      <Card className="mb-3" style={{ maxWidth: '800px' }}>
        <Row className="g-0">
          <Col md={4} className="bg-secondary d-flex align-items-center justify-content-center text-light">
            <Card.Img
              src={chii}
              alt="圖片"
            />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                <a>CC's Lin實驗室著重於</a>
              </Card.Text>
              <Card.Text>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default ResearchContent;
