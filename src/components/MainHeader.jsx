import React from 'react'
import '../style.css'
import {Link } from "react-router-dom";
const MainHeader = () => {
  return (
    <>
    
    <header>
        <div className='container'>
          <div id="branding">
            <h1><span className="highlight">Products </span> Web Design</h1>
            <nav>
      <Link to="/">Home</Link> {""}
      {""}
      <Link to="/about">About</Link> {""}
      {""}
      <Link to="/resume">Resume</Link>
            </nav>
          </div>  
        </div>
    </header>
   
    </>   
  )
}

export default MainHeader