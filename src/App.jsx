import { useState } from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import backgroundImage from './assets/modern_bg.jpg';
import BodyContent from './components/BodyContent'
import GalleryCarousel from './components/GalleryCarousel'

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
    <>
      <BrowserRouter>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderComponent />
          <GalleryCarousel />
          <div style={{ flex: 1, marginTop: '60px', marginBottom: '40px', overflowY: 'auto' }}> {/* Adjust margins to avoid content being hidden behind the fixed header and footer */}
            <img src={backgroundImage} alt="background" className='bg' />
            <BodyContent />
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
