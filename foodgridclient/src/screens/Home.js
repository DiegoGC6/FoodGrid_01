import React from 'react'

import '../components/containers.css'

import Header from '../components/Header'
import image from '../images/homescreen.png'


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
