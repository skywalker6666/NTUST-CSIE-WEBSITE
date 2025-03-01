import { useState } from 'react'
import './App.css'
import TestComponent from './components/TestComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
          <div style={{ flex: 1, marginTop: '60px', marginBottom: '40px', overflowY: 'auto' }}> {/* Adjust margins to avoid content being hidden behind the fixed header and footer */}
            <TestComponent />
          </div>
          <FooterComponent />
        </div>
      </BrowserRouter>

    </>
  )
}

export default App
