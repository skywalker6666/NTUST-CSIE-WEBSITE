import React from 'react';
import FooterComponent from './FooterComponent';
import CuteMemberCarousel from './CuteMemberCarousel';
import ResearchContent from './ResearchContent';
import ChiaChihContent from './ChiaChihContent';
import IntroContent from './IntroCotent';
import ContactContent from './ContactContent';
import CarouselBar from './CarouselBar';
import AISP from '../assets/AISP.gif';
import TEE from '../assets/TEE.jpg';
import PUF from '../assets/PUF.png';
import edge_computing from '../assets/edge_computing.png';

const BodyContent = () => {
  return (
    <div className="bodyContent"style={{ flex: 1, paddingBottom: '40px', overflowY: 'auto' }}>
      <CarouselBar />
      <div id="intro" className='sections'>
        <h1>實驗室簡介</h1>
        <IntroContent />
      </div>

      <div id="professor" className='sections'>
        <h2>指導老師</h2>
        <ChiaChihContent />
      </div>

      <div id="publications" className='sections'>
        <h2>研究方向</h2>
        <ResearchContent
          picture={PUF}
          title="硬體信任根(Root of Trust, RoT)-Physical Unclonable Function(PUF)"
          describe="Physical Unclonable Function (PUF) 是一種利用硬體製造過程中引入的不可控隨機性來生成多種挑戰-響應對(Challenge-Response Pair, CRP)的技術。這些 CRP 可以用來實現高安全性的認證和加密，而無需在設備中存儲敏感信息。PUF 生成的獨特且不可克隆的硬體指紋可用於設備的唯一標識和安全協議中的密鑰生成，因此被視為硬體的信任根 (Root of Trust, RoT)。"
          line1="PUF設計與優化： 探討如何設計更強大的 PUF 結構，使其能夠抵禦建模攻擊、物理克隆攻擊和環境變異的影響，同時保持高效的CRP生成能力。 "
          line2="PUF 在 IoT 環境中的應用： 研究如何在物聯網 (IoT) 環境中有效整合 PUF 技術，以實現安全引導、設備認證以及密鑰管理，確保在資源受限的設備中也能提供可靠的安全性。"
          line3="PUF 的安全性與穩定性： 分析 Strong PUF 的安全性指標，如唯一性、不可克隆性和穩定性，並設計測試方法來驗證這些指標。"
          line4="PUF 的可驗證性與標準化： 探討如何標準化 PUF 的設計和應用，使其能夠在不同硬體平台上廣泛採用，同時保證其可信性。" />
        <ResearchContent
          picture={TEE}
          title="可信任執行環境 (Trusted Execution Environment, TEE) "
          describe="可信任執行環境是一個隔離的計算環境，可以保護應用程序中的敏感數據和代碼，防止它們受到未經授權的訪問或修改。TEE通常由硬體支持，如Intel 的 SGX 或ARM的TrustZone，這些技術可以在不可信的主機操作系統之上提供一個安全的執行環境。"
          line1="TEE設計與優化： 如何設計更加高效、靈活的TEE架構，使其能夠支持各種應用場景。"
          line2="TEE的可擴展性： 如何將TEE擴展到支持更大的數據集和更多的應用場景，而不損害其安全性。"
          line3="安全漏洞分析： 研究TEE中可能存在的安全漏洞，以及如何有效地修補這些漏洞。"
          line4="應用場景： TEE在移動支付、物聯網、雲計算等領域中的應用和挑戰。" />
        <ResearchContent
          picture={AISP}
          title="人工智慧安全與隱私保護 (AI Security and Privacy)"
          describe="人工智慧安全與隱私保護研究旨在確保人工智慧系統的安全性和用戶數據的隱私性。這個領域涵蓋對抗性攻擊（例如，通過微小的輸入變更欺騙AI模型）、數據隱私（例如，如何在不泄露敏感信息的情況下訓練AI模型）等問題。"
          line1="對抗性攻擊與防禦： 研究如何設計對抗性攻擊，以及如何增強AI模型的穩健性以抵禦這些攻擊。"
          line2="隱私保護機制： 探索差分隱私、聯邦學習等技術，確保在AI系統中處理數據時不會洩露用戶的敏感信息。"
          line3="AI模型的可信性： 如何評估和提高AI模型的可信度，確保它們在實際應用中不會作出錯誤或有偏見的決策。"
          line4="倫理與法律考量： 探討AI在安全和隱私方面的倫理問題，以及如何制定相應的法律和政策框架。" />
        <ResearchContent
          picture={edge_computing}
          title="安全邊緣運算 (Secure Edge Computing)"
          describe="邊緣運算是將數據處理和存儲功能推送到網絡的“邊緣”，即更靠近數據生成源的位置，以減少延遲並提高處理效率。安全邊緣運算則是專注於如何在這種分佈式環境中保護數據的安全和隱私，防止潛在的攻擊。"
          line1="分佈式安全機制： 在分佈式的邊緣設備上如何實施一致且有效的安全機制，包括身份驗證、數據加密、訪問控制等。"
          line2="數據隱私保護： 在邊緣運算中如何保護用戶數據的隱私，尤其是在設備資源有限的情況下。"
          line3="輕量級安全協議： 為邊緣設備設計輕量級的安全協議，以減少計算和通信的開銷。"
          line4="邊緣設備的風險評估與管理： 研究如何動態地評估邊緣設備的安全風險，並採取適當的風險管理措施。" />
      </div>

      <div id="members" className='sections'>
        <h2>實驗室成員</h2>
        <h2><strong>Lab小可愛們(研究生)</strong></h2>
        <CuteMemberCarousel />
      </div>

      <div id="contact" className='sections'>
        <h2>聯絡方式</h2>
        <ContactContent />
      </div>
    </div>
  );
};

export default BodyContent;
