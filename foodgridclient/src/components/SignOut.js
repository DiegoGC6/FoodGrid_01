import React from 'react'
import Header from './Header'
import image from '../images/signouttwo.png'
import { Row, Container, Button, Nav} from 'react-bootstrap'
import { Footer } from 'react-router-bootstrap'


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
              <a href="../../aboutus">Back</a>
            </p>
            </div>
        </footer>
        </>  
    )
}