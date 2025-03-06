import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import chii from '/src/assets/chiikawa.png';
import {Carousel} from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <header style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#1A1A1A', zIndex: 1000, padding: '0 10px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', color: '#FFF', fontWeight: 'bold', padding: '1px' }}>
          <img src={chii} alt="chii" width="25px" style={{ marginRight: '10px' }} />
          <div>
            NTUST CC Lin's LAB
          </div>
        </div>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="#intro" style={{ color: '#FFF', textDecoration: 'none' }}>實驗室簡介</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="#professor" style={{ color: '#FFF', textDecoration: 'none' }}>指導老師</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="#publications" style={{ color: '#FFF', textDecoration: 'none' }}>研究方向</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="#members" style={{ color: '#FFF', textDecoration: 'none' }}>實驗室成員</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="#contact" style={{ color: '#FFF', textDecoration: 'none' }}>聯絡方式</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
};

export default HeaderComponent;
