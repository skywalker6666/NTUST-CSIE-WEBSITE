import React from 'react';
import { Card,Figure } from 'react-bootstrap';


const IntroContent = () => {
  return (
    <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        margin: '10px auto',  
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '10px', 
        maxWidth: '80%'  // 固定最大寬度
    }}>
        <div >
              <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>CC Lin's實驗室研究方向著重於應用與開發不同領域的資訊安全技術，包含硬體資安(Hardware Security)與軟體資安(Cybersecurity)。</h3>
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>相關技術的應用與發展包含：</p>
              <ol style={{ fontSize: '15px' }}>
                <li style={{ fontSize: '17px' }}>硬體信任根 (Root of Trust, RoT) - Physical Unclonable Function (PUF)
                    <ul style={{ fontSize: '14px' }}>
                        <li>PUF 設計與優化</li>
                        <li>PUF 在 IoT 環境中的應用</li>
                        <li>PUF 的安全性與穩定性</li>
                        <li>PUF 的可驗證性與標準化</li>
                    </ul>
                </li>

                <li style={{ fontSize: '17px' }}>可信任執行環境 (Trusted Execution Environment, TEE)
                    <ul style={{ fontSize: '14px' }}>
                        <li>TEE 設計與優化</li>
                        <li>TEE 的可擴展性</li>
                        <li>安全漏洞分析</li>
                        <li>應用場景: TEE 在移動支付、物聯網、雲計算等領域中的應用和挑戰。</li>
                    </ul>
                </li>
                <li style={{ fontSize: '17px' }}>人工智慧安全與隱私保護 (AI Security and Privacy)
                    <ul style={{ fontSize: '14px' }}>
                        <li>對抗性攻擊與防禦</li>
                        <li>隱私保護機制</li>
                        <li>AI模型的可信性</li>
                        <li>倫理與法律考量</li>
                    </ul>
                </li>
                <li style={{ fontSize: '17px' }}>安全邊緣運算 (Secure Edge Computing)
                    <ul style={{ fontSize: '14px' }}>
                        <li>分佈式安全機制</li>
                        <li>數據隱私保護</li>
                        <li>輕量級安全協議</li>
                        <li>邊緣設備的風險評估與管理</li>
                    </ul>
                </li>
              </ol>
              <p style={{ fontSize: '20px' }}>目前實驗室成員包括指導教授、碩士一般生共 8 名（碩一 8 名）。</p>
        </div>  
    </div>
  );
};
export default IntroContent;



