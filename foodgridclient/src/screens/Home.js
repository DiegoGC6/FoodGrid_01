import React from 'react'
import { Row, Container } from 'react-bootstrap'
import '../components/containers.css'
import CardTwo from '../components/CardTwo'
import Header from '../components/Header'
import image from '../images/homescren.png'


function Home() {
  return (
    <>
    <Header />
   <div >
     <img src={image} class="center"></img>
   </div>
    </> 
  )
}

export default Home
