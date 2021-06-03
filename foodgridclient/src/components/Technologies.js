import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import Header from "./Header";
import image from "../images/technologies.png";

export default function Technologies() {
  return (
    <>
      <Header />
      <div>
        <img src={image} class="center"></img>
      </div>
      <p class="float-right">
        <LinkContainer to="/aboutus">
          <Nav.Link>Back to About Us!</Nav.Link>
        </LinkContainer>
      </p>
    </>
  );
}
