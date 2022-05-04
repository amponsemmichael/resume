import React from 'react'
import '../style.css'
import {Outlet, Link } from "react-router-dom";
const AboutHeader = () => {
  return (
    <>
    
    <header>
        <div className='container'>
          <div id="branding">
            <h1><span className="highlight">About </span> Web Design</h1>
            <nav>
      <Link to="/">Home</Link> {""}
      <Link to="/About">About</Link> {""}
      <Link to="/resume">Resume</Link>
            </nav>
          </div>  
        </div>
    </header>
   
    </>   
  )
}

export default AboutHeader