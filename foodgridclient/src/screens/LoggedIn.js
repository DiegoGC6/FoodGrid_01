import React from 'react'
import CardOne from '../components/CardOne'
import { Row } from 'react-bootstrap'
import '../components/containers.css'
import HeaderLoggedIn from '../components/HeaderLoggedIn'

function LoggedIn() {
  return (
    <>
    <body className="body">
      <HeaderLoggedIn />
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