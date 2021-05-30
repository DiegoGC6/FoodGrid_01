import React from 'react'
import CardOne from '../components/card'
import {Row, Container, Image} from 'react-bootstrap'
import '../components/containers.css'
import AboutUs from '../components/AboutUs'

function LoggedIn() {
  return (
    <>
    <body className="body">
      <Row className="Container">
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
        <CardOne />
      </Row>
    </body>    
    </> 
  )
}

export default LoggedIn