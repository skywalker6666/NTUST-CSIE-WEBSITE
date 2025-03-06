import React from 'react';
import { Card } from 'react-bootstrap';
import satoshi from '../assets/satoshi.png';

const ChiaChihContent = () => {
  return (
    <div style={{ display: 'inline-block', margin: '10px' }}>
        <Card style={{ width: '20rem', height: 'auto' }}>
            <Card.Img variant="top" src={satoshi} style={{ height: '20rem', width: 'auto' }} />
            <Card.Body>
                <Card.Title>林佳志 博士 Chia-Chih Lin, PH.D</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li><strong>現職：</strong>國立臺灣科技大學 資訊工程學系 助理教授</li>
                        <li><strong>學歷：</strong>國立台灣大學電機博士</li>
                        <li><strong>專長：</strong>資料探勘、機器學習、人工智慧</li>
                        <li><strong>電子郵件：</strong><a href="mailto:cclin@mail.ntust.edu.tw">cclin@mail.ntust.edu.tw</a></li>
                        <li><strong>聯絡電話：</strong>+886-3-4227151 #66525</li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
</div>
  );
};
export default ChiaChihContent;



