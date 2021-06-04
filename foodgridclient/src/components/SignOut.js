import React from 'react'
import Header from './Header'
import image from '../images/signouttwo.png'



export default function Technologies() {
    return (
        <>
        <Header />
        <div>
            <img src={image} class="center"></img>
        </div>
        <footer>
        <div class="container">
            <p class="float-right">
              <a href="../../">Back to Home</a>
            </p>
            </div>
        </footer>
        </>  
    )
}