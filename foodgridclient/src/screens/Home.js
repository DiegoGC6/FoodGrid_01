import React from 'react'
import CardOne from '../components/card'
import {Row, Container, Image} from 'react-bootstrap'
import '../components/containers.css'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <>
      <Row className="Margin">
        <AboutUs />
        <AboutUs />
        <AboutUs />
        <AboutUs />
      </Row>    
    </> 
  )
}

export default Home
