import { useState, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive';
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import backgroundImage from './assets/modern_bg.jpg';
import BodyContent from './components/BodyContent';
import HeaderComponent_Mobile from './components/HeaderComponent_Mobile';
import ASIP from './assets/AISP.gif';

import 'bootstrap/dist/css/bootstrap.css';



function App() {
  // const [isMobile, setIsMobile] = useState(false);
  const [count, setCount] = useState(0)
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div>
      {isMobile?
        <BrowserRouter>
          <HeaderComponent_Mobile />
          <BodyContent />
          <FooterComponent />
        </BrowserRouter>
        :
        <BrowserRouter>
          <HeaderComponent/>
            <img src={backgroundImage} alt="background" className='bg' />
          <BodyContent/>
          <FooterComponent/>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
