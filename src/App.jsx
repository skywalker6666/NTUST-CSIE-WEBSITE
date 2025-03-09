import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import backgroundImage from './assets/modern_bg.jpg';
import BodyContent from './components/BodyContent'

import 'bootstrap/dist/css/bootstrap.css';



function App() {
  const [count, setCount] = useState(0)
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div             style={{
      transform: 'scale(1)',// 鎖定比例，縮放 80%
      transformOrigin: 'top left', // 鎖定左上角為縮放原點
      // overflow: 'hidden'      // 超過部分隱藏
  }}>
      <BrowserRouter>
        <HeaderComponent />
        <img src={backgroundImage} alt="background" className='bg' />
        <BodyContent />
        <FooterComponent />
      </BrowserRouter>

    </div>
  )
}

export default App
