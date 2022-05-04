import React from 'react'
import '../style.css'
import Footer from '../components/Footer'
import AboutHeader from '../components/AboutHeader'

export default function About () {
  return (
      <>

      <AboutHeader />
<section id="newsletter">
   <div class="container">
      <h1>Subscribe To Our Newsletter</h1> 
      <form>
         <input type="email" placeholder="Enter Email...." /> 
         <button type="submit" class="button_1">Subscribe</button>
      </form>
   </div>
</section>

<section id="main">
  <div class="container">
    <article id="main-col">
        <h1 class="page-title">
            About Me
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt id voluptatum cum incidunt numquam dolorem blanditiis necessitatibus quia, veniam nemo magnam quod, enim at modi quasi! Nulla hic blanditiis explicabo!
        </p>
        <p class="dark">
            Sequi earum, fugit dolor labore ipsa blanditiis? Repudiandae cupiditate id voluptates, numquam voluptatum nesciunt ad molestiae ducimus eius atque quod delectus in voluptatem asperiores, cumque facere suscipit et recusandae quos.
        </p>
    </article>  

    <aside id="sidebar">
        <div class="dark">
        <h3>What We Do</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit eligendi cum aspernatur laboriosam consequuntur omnis hic, adipisci temporibus delectus libero, veritatis voluptatem. Accusantium similique sapiente fugit nobis incidunt consequuntur.</p>
        </div>
    </aside>
  </div> 
</section>

<Footer />
      </>
    
  )
}

