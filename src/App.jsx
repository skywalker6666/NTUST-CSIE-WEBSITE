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
    <>
      <BrowserRouter>
        <HeaderComponent />
        <img src={backgroundImage} alt="background" className='bg' />
        <BodyContent />
        <FooterComponent />
      </BrowserRouter>

    </>
  )
}

export default App
