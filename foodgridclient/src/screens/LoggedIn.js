import React from 'react'
import CardOne from '../components/CardOne'
import CardTwo from '../components/CardTwo'
import CardThree from '../components/CardThree'
import CardFour from '../components/CardFour'
import CardFive from '../components/CardFive'
import { Row } from 'react-bootstrap'
import '../components/containers.css'
import HeaderLoggedIn from '../components/HeaderLoggedIn'


function LoggedIn() {
  return (
    <>
    
      <HeaderLoggedIn />
      
      <Row class="d-flex justify-content-between align-items-center">        
        <CardOne />    
        <CardTwo />
        <CardThree />
        <CardFour /> 
        <CardFive />      
      </Row>
 
    </> 
  )
}

export default LoggedIn