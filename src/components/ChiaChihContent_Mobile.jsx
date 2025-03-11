import React from 'react';
import { Card,Figure } from 'react-bootstrap';
import satoshi from '../assets/satoshi.png';
import satoshi_champion from '../assets/satoshi_champion1.jpg';

const ChiaChihContent_Mobile = () => {
  return (
    <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',  // 當螢幕變小時，自動換行
        alignItems: 'flex-start', 
        margin: '10px auto',  // 讓 div 置中
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '10px', 
        width: '100%',  // 讓 div 自適應寬度
        maxWidth: '800px'  // 限制最大寬度
      }}>
        <img 
          src={satoshi_champion} // 替換為你的圖片變數 satoshi_champion
          alt="Professor Chia-Chih Lin"
          style={{ 
            height: 'auto',  // 讓高度自適應
            maxWidth: '100%', // 圖片不超過父容器
            width: '250px',  // 預設寬度，但不超過 max-width
            marginRight: '20px', 
            borderRadius: '8px',
            border: '1px solid black' 
          }} 
        />
        <div style={{ textAlign: 'left', flex: 1 }}>
          <h3 style={{ marginBottom: '10px' }}>林佳志 博士 Chia-Chih Lin, PH.D</h3>
          <ul className="responsive-list"  style={{ listStyleType: 'none', padding: '0'}}>
            <li><strong>現職：</strong>國立臺灣科技大學 資訊工程學系 助理教授</li>
            <li><strong>學歷：</strong>國立台灣大學電機博士</li>
            <li>
              <strong>專長：</strong>硬體信任根、可信任執行環境、人工智慧安全與隱私保護、安全邊緣運算
            </li>
            <li><strong>辦公室：</strong>RB-501</li>
            <li><strong>電子郵件：</strong>
              <a href="mailto:cclin@mail.ntust.edu.tw" style={{ textDecoration: 'none', color: '#007bff' }}>
                cclin@mail.ntust.edu.tw
              </a>
            </li>
            <li><strong>聯絡電話：</strong></li>
          </ul>
        </div>
      </div>


  );
};
export default ChiaChihContent_Mobile;



