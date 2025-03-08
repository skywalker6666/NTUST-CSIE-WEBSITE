import React, {useState}from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';

const CuteMember = (props) => {
    const [imageSrc, setImageSrc] = useState(props.picture1);
    const handleMouseEnter = () => {
        setImageSrc(props.picture2); 
    };

    const handleMouseLeave = () => {
        setImageSrc(props.picture1); 
    };
    return(
        <Card style={{ width: '12rem', margin: '5px' ,gap:'5px'}}>
        <Card.Img variant="top" src={imageSrc} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{ height: '150px', width: 'auto', transition: '0.3s', cursor: 'pointer', background:'white'}} />
        <Card.Body>
            <Card.Title>{props.memberName}</Card.Title>
            <Card.Text>{props.textfile}</Card.Text>
        </Card.Body>
        <Card.Footer>Research Domain:<br/>{props.subject}</Card.Footer>
    </Card>
    );
};

export default CuteMember;
