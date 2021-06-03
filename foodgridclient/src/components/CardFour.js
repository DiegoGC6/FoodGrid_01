import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Image, Nav, Button } from 'react-bootstrap'
import image from '../images/tuna.png'
import '../components/containers.css'


function CardFour() {
  return (
    
  <div class="Img">
    <div class={{Card}} style={{width: "18rem"}}>
    <Image src={image} class="Img" alt="can't find img"/>
    <div class="card-body">
      <h5 class="card-title">Tuna</h5>
      <p class="card-text">Canned Tuna. light chunks. pick up in bridgeland</p>

        <LinkContainer to='/listitems'>
          <Button>Items</Button>
        </LinkContainer>

    </div>
  </div>
  </div>
  
  
   
  
  )
}
export default CardFour





