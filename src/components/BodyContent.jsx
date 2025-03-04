import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const BodyContent = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderComponent />
      <div style={{ flex: 1, paddingTop: '60px', paddingBottom: '40px', overflowY: 'auto' }}> {/* Adjust padding to avoid content being hidden behind the fixed header and footer */}
        <div id="intro" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>實驗室簡介</h2>
          <p>這是實驗室簡介的內容。</p>
        </div>

        <div id="professor" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>指導老師</h2>
          <p>這是指導老師的內容。</p>
        </div>

        <div id="publications" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>期刊論文發表</h2>
          <p>這是期刊論文發表的內容。</p>
        </div>

        <div id="members" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>實驗室成員</h2>
          <p>Lab小可愛們。</p>
        </div>

        <div id="contact" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>聯絡方式</h2>
          <p>聯絡我們</p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default BodyContent;
