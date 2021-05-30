import React from 'react'
import CardOne from '../components/card'
import {Row, Container, Image} from 'react-bootstrap'
import '../components/containers.css'
import AboutUs from '../components/AboutUs'

function Home() {
  return (
    <>
    <body className="body">
      <Row className="Margin">
        <AboutUs />
        <AboutUs />
        <AboutUs />
        <AboutUs />
      </Row>
    <Container>
      <Row className="Container">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </Row>
    </Container>
    </body>    
    </> 
  )
}

export default Home
