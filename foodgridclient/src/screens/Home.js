import React from 'react'
import { Row } from 'react-bootstrap'
import '../components/containers.css'
import CardTwo from '../components/CardTwo'
import Header from '../components/Header'


function Home() {
  return (
    <>
    <Header />
      <Row className="Margin">
        <CardTwo />
        <CardTwo />
        <CardTwo />
        <CardTwo />
      </Row>    
    </> 
  )
}

export default Home
