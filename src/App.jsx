import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import LandingPage from './components/organisms/LandingPage/LandingPage'
import Destination from './components/organisms/DestinationPage/Destination'
import AboutUs from './components/organisms/AboutUs/AboutUs'
import ContactUs from './components/organisms/ContactUs/Contact'
import Coming from './components/organisms/ComingSoon/Coming';
import ComingSoon from './components/organisms/ComingSoon/ComingSoon';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/coming' element={<ComingSoon/>}/>
      </Routes>
    </Router>
  )
}

export default App
  