import React from 'react'
import { Row } from 'react-bootstrap'
import '../components/containers.css'
import AboutUs from '../components/AboutUs'
import Header from '../components/Header'

function Home() {
  return (
    <>
    <Header />
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
