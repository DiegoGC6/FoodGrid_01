import React from 'react'
import CardOne from '../components/CardOne'
import CardTwo from '../components/CardTwo'
import CardThree from '../components/CardThree'
import CardFour from '../components/CardFour'
import { Row } from 'react-bootstrap'
import '../components/containers.css'
import HeaderLoggedIn from '../components/HeaderLoggedIn'

function LoggedIn() {
  return (
    <>
    
      <HeaderLoggedIn />
      <Row >        
        <CardOne />    
        <CardTwo />
        <CardThree />
        <CardFour />       
      </Row>
        
    </> 
  )
}

export default LoggedIn