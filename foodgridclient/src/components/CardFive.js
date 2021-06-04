import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Image, Button } from 'react-bootstrap'
import image from '../images/sauce.jpg'
import '../components/containers.css'


function CardFive() {
  return (
    
    <div class="Img">
    <div class={{Card}} style={{width: "18rem"}}>
    <Image src={image} class="Img" alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">PASTA SAUCE</h5>
      <p class="card-text">Extra sauce I won't be using and I'd like to not see it go to waste!
      
      
      </p>

        <LinkContainer to='/listitems'>
          <Button>Items</Button>
        </LinkContainer>

    </div>
  </div>
  </div>
  
  
   
  
  )
}
export default CardFive