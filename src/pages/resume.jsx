
import React from 'react'
import { Container } from 'react-bootstrap';
import Skills from '../cv/skills';
import Education from '../cv/education';
import Experience from '../cv/experience';
import Leadership from '../cv/leadership';


export default function Resume () {
  return (
  
    <Container>
     <div className='h1 p-3 text-dark text-center'> MICHAEL AMPONSEM</div>
     <div>
      <div className="row text-dark text-center">
        <div className="col-sm-2">
          <p>
            amponsem_michael@yahoo.com
          </p>
        </div>
        <div className="col-sm-5">
          <p>
         <a href="http://github.com/amponsemmichael" className='text-decoration-none'>github.com/amponsemmichael</a> 
          </p>
        </div>
        <div className="col-sm-3">
          <p>
          233542920373
          </p>
        </div>
      </div>
     </div>
    <Education />
    <Experience />
    <Skills />
    <Leadership />
  
    </Container>
    
  )
}
