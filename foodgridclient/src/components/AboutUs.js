import React from 'react'
import { Card } from 'react-bootstrap'
import picture from '../images/cake.jpg'



function AboutUs () {
  return (
    
    <div class={{Card}} style={{width: "18rem"}}>
    <img style={{paddingRight: "10px"}, {width: "100px"}, {height: "100px"}} src={picture} alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">Happy Birthday MARC!!!</h5>
      <p class="card-text">enjoy it!!</p>
    </div>
  </div>
  
  
  
   
  
  )
}
export default AboutUs



