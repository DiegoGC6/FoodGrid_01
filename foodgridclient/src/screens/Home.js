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
    </body>
    <Container>
      <h2>PLEASE LOG IN GUYS AND TRY IT OUT</h2>
    </Container>    
    </> 
  )
}

export default Home
