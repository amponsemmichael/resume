import React from 'react'
import {Link } from "react-router-dom";
import Footer from './components/Footer'
import MainHeader from './components/MainHeader'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import pic from './images/mypic.jpg'

export default function App ()  {
  return (
    <>
     <MainHeader />

     <section id='showcase'>
        <div className="container">
        <h1>Responsive Web Design</h1>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto illum doloribus ipsam impedit autem beatae corporis aspernatur, blanditiis, placeat quibusdam excepturi repellendus ad reiciendis! Suscipit totam culpa perferendis at molestiae?</p>
        </div>
     </section>

     <section id="newsletter">
       <div className="container">
       <h1>Subscribe To Our Newsletter</h1> 
          <form>
             <input type="email" placeholder="Enter Email...." /> 
             <button type="submit" class="button_1">Subscribe</button>
          </form>
       </div>
     </section>
     
     <section id="boxes">
       <div className="container">
         <div className="box">
          <img src={pic} />
          <h3>MY SERVICES</h3>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque in commodi, consequuntur odit repudiandae modi ducimus incidunt suscipit doloribus inventore sed aspernatur vitae recusandae velit est! Saepe provident soluta magnam.</p>
         </div>
         <div className="box">
          <img src={pic} />
          <h3>MY SERVICES</h3>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque in commodi, consequuntur odit repudiandae modi ducimus incidunt suscipit doloribus inventore sed aspernatur vitae recusandae velit est! Saepe provident soluta magnam.</p>
         </div>
         <div className="box">
          <img src={pic} />
          <h3>MY SERVICES</h3>
          <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque in commodi, consequuntur odit repudiandae modi ducimus incidunt suscipit doloribus inventore sed aspernatur vitae recusandae velit est! Saepe provident soluta magnam.</p>
         </div>
       </div>
     </section>

     <Footer />
    </>
      
  )
}


