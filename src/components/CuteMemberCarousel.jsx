import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import kanahei from '../assets/kanahei.png';
import gabo from '../assets/gabo.jpg';
import chii from '../assets/chiikawa.png';
import eren from '../assets/eren.jpg';
import yugi from '../assets/yugi.jpg';
import hachi from '../assets/hachi.jpg';
import togawa_group from '../assets/togawa_group.jpg';
import nunu from '../assets/nunu.jpg';
import piske from '../assets/piske.png';
import gabo2 from '../assets/gabo2.jpg';
import CuteMember from './CuteMember';
const CuteMemberCarousel = () => {
    const members = [
        { id: 'Member1', memberName: '楊承峰', textfile: '這是小可愛1的內容。', picture1: piske,picture2:kanahei,subject:'PUF' },
        { id: 'Member2', memberName: '廖軒敖', textfile: '思考一下', picture1: gabo,picture2:kanahei,subject:'AI Cybersecurity' },
        { id: 'Member3', memberName: '李宥睿', textfile: '這是小可愛3的內容。', picture1: yugi, picture2:kanahei ,subject:'TEE' },
        { id: 'Member4', memberName: '陳星潔', textfile: '這是小可愛4的內容。', picture1: hachi,picture2: kanahei,subject:'PUF' },
        { id: 'Member5', memberName: '陳廷祥', textfile: '這是小可愛5的內容。', picture1: eren,picture2:kanahei,subject:'PUF' },
        { id: 'Member6', memberName: '張育愷', textfile: '這是小可愛6的內容。', picture1: togawa_group,picture2:kanahei,subject:'Federated Learning' },
        { id: 'Member7', memberName: '潘致瑋', textfile: '這是小可愛7的內容。', picture1: nunu,picture2:kanahei,subject:'Federated Learning' },
        { id: 'Member8', memberName: '李聖文', textfile: '這是小可愛8的內容。', picture1: gabo2,picture2:kanahei,subject:'Federated Learning' }
    ];

    // 將成員資料分組，每組4個
    const chunkedMembers = [];
    for (let i = 0; i < members.length; i += 4) {
        chunkedMembers.push(members.slice(i, i + 4));
    }

    return (
        <Carousel id="members"className='mx-auto' interval={10000} controls={false}   style={{maxWidth:'90%', position:'relative'}}>
            {chunkedMembers.map((group, index) => (
                <Carousel.Item key={index} >
                    <Container >
                        <Row className="justify-content-center g-0">
                            {group.map(member => (  
                                <Col key={member.id} xs={5} md={3} style={{ padding: '0 2px' }}>
                                    <CuteMember
                                        memberName={member.memberName}
                                        textfile={member.textfile}
                                        picture1={member.picture1}
                                        picture2={member.picture2}
                                        subject={member.subject}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CuteMemberCarousel;
