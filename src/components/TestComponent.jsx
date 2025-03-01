import React from 'react';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const TestComponent = () => {
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

        <div id="plans" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>研究計畫</h2>
          <p>這是研究計畫的內容。</p>
        </div>

        <div id="more" style={{ height: '500px', padding: '20px', border: '1px solid #ccc' }}>
          <h2>更多選項</h2>
          <p>這是更多選項的內容。</p>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default TestComponent;
