import React from 'react'
import './header.css';
import CTA from './CTA';
import Me from '../../assests/Me.png';
import HeaderSocial from './HeaderSocials';
const header = () => {
  return (
    <header>  
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Mubashir Liaqat</h1>
      <h5 className="text-light">
        Web-Developer
      </h5>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={Me} alt="Mubashir-Liaqat"/>
      </div>
      <a href="#contact" className="scroll_down">Scroll Down</a>
    </div>
    </header>
  )
}

export default header