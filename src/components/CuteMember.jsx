import React from 'react';
import { Card } from 'react-bootstrap';

const CuteMember = (props) => {
  return (
    <div style={{display: 'inline-block', margin: '10px'}}>
        <Card style={{ width: '12rem',height:'auto' }}>
            <Card.Img variant="top" src={props.picture} style={{height:'150px',weight:"auto"}}  />
            <Card.Body>
            <Card.Title>{props.memberName}</Card.Title>
            <Card.Text>
                {props.textfile}
            </Card.Text>
            </Card.Body>
            <Card.Footer>PUF</Card.Footer>
        </Card>
    </div>
  );
};
export default CuteMember;
