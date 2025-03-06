import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import CuteMemberCarousel from './CuteMemberCarousel';
import ResearchContent from './ResearchContent';
import ChiaChihContent from './ChiaChihContent';
import { Button,Card,Row,Col,Carousel } from 'react-bootstrap';
import CarouselBar from './CarouselBar';
import kanahei from '../assets/kanahei.png';
import gabo from '../assets/gabo.jpg';


const BodyContent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderComponent />
      <div style={{ flex: 1, paddingTop: '60px', paddingBottom: '40px', overflowY: 'auto' }}> Adjust padding to avoid content being hidden behind the fixed header and footer
      <CarouselBar/>
        <div id="intro" style={{ height: '600px', padding: '20px', border: '1px solid #ccc' }}>
          <h1>實驗室簡介</h1>
          <div>
              <h3>CC Lin's實驗室研究方向著重於應用與開發不同領域的資訊安全技術，包含硬體資安(Hardware Security)與軟體資安(Cybersecurity)。</h3>

              <p>相關技術的應用與發展包含：</p>
              <ol>
              <li><strong>硬體信任根 (Root of Trust, RoT) - Physical Unclonable Function (PUF)</strong>
                <ul>
                  <li>PUF 設計與優化</li>
                  <li>PUF 在 IoT 環境中的應用</li>
                  <li>PUF 的安全性與穩定性</li>
                  <li>PUF 的可驗證性與標準化</li>
                </ul>
              </li>

              <li><strong>可信任執行環境 (Trusted Execution Environment, TEE)</strong>
                <ul>
                  <li>TEE 設計與優化</li>
                  <li>TEE 的可擴展性</li>
                  <li>安全漏洞分析</li>
                  <li>應用場景: TEE 在移動支付、物聯網、雲計算等領域中的應用和挑戰。</li>
                </ul>
              </li>

              <li><strong>人工智慧安全與隱私保護 (AI Security and Privacy)</strong>
                <ul>
                  <li>對抗性攻擊與防禦</li>
                  <li>隱私保護機制</li>
                  <li>AI模型的可信性</li>
                  <li>倫理與法律考量</li>
                </ul>
              </li>

              <li><strong>安全邊緣運算 (Secure Edge Computing)</strong>
                <ul>
                  <li>分佈式安全機制</li>
                  <li>數據隱私保護</li>
                  <li>輕量級安全協議</li>
                  <li>邊緣設備的風險評估與管理</li>
                </ul>
              </li>
              </ol>
              <p>目前實驗室成員包括指導教授、碩士一般生共 8 名（碩一 8 名）。</p>
          </div>   
        </div>     

        <div id="professor" style={{ height: '600px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>指導老師</h2>
          <p>這是指導老師的內容。</p>
          <ChiaChihContent/>
        </div>

        <div id="publications" style={{ height: '600px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>研究方向</h2>
          <p>這是研究方向的內容。</p>
          <ResearchContent/>
        </div>

        <div id="members" style={{ height: '600px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>實驗室成員</h2>
          <h2><strong>Lab小可愛們(研究生)</strong></h2>
          {/* <CuteMember id="Member1" memberName="楊承峰" textfile="這是小可愛1的內容。" picture={kanahei} />
          <CuteMember id="Member2" memberName="廖軒敖" textfile="這是小可愛2的內容。" picture={gabo} />
          <CuteMember id="Member3" memberName="李宥睿" textfile="這是小可愛3的內容。" picture={kanahei} />
          <CuteMember id="Member4" memberName="陳星潔" textfile="這是小可愛4的內容。" picture={kanahei} />
          <CuteMember id="Member5" memberName="陳廷祥" textfile="這是小可愛5的內容。" picture={kanahei} /> 
          <CuteMember id="Member6" memberName="張育愷" textfile="這是小可愛6的內容。" picture={kanahei} />
          <CuteMember id="Member7" memberName="潘致瑋" textfile="這是小可愛7的內容。" picture={kanahei} />
          <CuteMember id="Member8" memberName="李聖文" textfile="這是小可愛8的內容。" picture={kanahei} /> */}
          <CuteMemberCarousel/>
        </div>

        <div id="contact" style={{ height: '600px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>聯絡方式</h2>
          <p>聯絡我們</p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default BodyContent;
