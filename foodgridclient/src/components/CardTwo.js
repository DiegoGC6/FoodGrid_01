import React from 'react'
import { Card, Image } from 'react-bootstrap'
import image from "../images/soup.jpg";
import '../components/containers.css'



function CardTwo () {
  return (
    <>
      <div class={{ Card }} style={{ width: "18rem" }}>
        <Image  src={image} class="Img" alt="can't find img" />
        <div class="card-body">
          <h5 class="card-title">Canned Corn</h5>
          <p class="card-text">
            Canned Corn. I have more than I can eat. Please don't let it go to waste!
          </p>
          <a
            href="http://localhost:3000/listitems"
            class="btn btn-primary"
            style={{ alignContent: "center" }}
          >
            See Item
          </a>
        </div>
      </div>
    </>
  );
}

export default CardTwo





