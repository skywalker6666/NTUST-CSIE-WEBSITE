import React from 'react';
import { Card,Figure } from 'react-bootstrap';
import satoshi from '../assets/satoshi.png';
import satoshi_champion from '../assets/satoshi_champion1.jpg';

const ChiaChihContent = () => {
  return (
<div style={{ 
    display: 'flex', 
    alignItems: 'flex-start', 
    margin: '10px auto',  // 自動左右置中
    border: '1px solid #ddd', 
    borderRadius: '8px', 
    padding: '10px', 
    maxWidth: '800px'  // 固定最大寬度
}}>
    <img src={satoshi_champion} style={{ height: '350px', width: 'auto', marginRight: '20px', borderRadius: '8px',border: '1px solid black' }} />
    <div style={{ textAlign: 'left' }}>
        <h3 style={{ marginBottom: '10px' }}>林佳志 博士 Chia-Chih Lin, PH.D</h3>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
            <li><strong>現職：</strong>國立臺灣科技大學 資訊工程學系 助理教授</li>
            <li><strong>學歷：</strong>國立台灣大學電機博士</li>
            <li style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}><strong>專長：</strong>硬體信任根、可信任執行環境、人工智慧安全與隱私保護、安全邊緣運算</li>
            <li><strong>辦公室：</strong>RB-501</li>
            <li><strong>電子郵件：</strong><a href="mailto:cclin@mail.ntust.edu.tw" style={{ textDecoration: 'none', color: '#007bff' }}>cclin@mail.ntust.edu.tw</a></li>
            <li><strong>聯絡電話：</strong></li>
        </ul>
    </div>
    {/* <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={satoshi}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure> */}
</div>


  );
};
export default ChiaChihContent;



