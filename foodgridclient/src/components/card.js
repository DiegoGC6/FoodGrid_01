import React from 'react'
import { Card, Image } from 'react-bootstrap'
import CardImage from './search'

import image from '../images/meat.jpeg'



function CardOne() {
  return (
    <div class={{Card}} style={{width: "18rem"}}>
    <Image src={image} alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">Steak</h5>
      <p class="card-text">Fresh Steak. Leaving for a vacation and I won't be able to cook them before I leave. Please don't let it go to waste!.</p>
      <a href="http://localhost:3000/listitems" class="btn btn-primary" style={{alignContent: "center"}}>See Item</a>
    </div>
  </div>
  
  
   
  
  )
}
export default CardOne





