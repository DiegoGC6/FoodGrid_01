import React from "react";
import { LinkContainer, Link } from "react-router-bootstrap";
import { Row, Container, Button, Nav } from "react-bootstrap";
import kinhhypicture from "../images/KinhHyChau.jpg";
import diegopicture from "../images/diegotwo.jpeg";
import Header from "./Header";
import markpicture from "../images/Mark_Peterson.jpeg";
import marcpicture from "../images/Marc_Ranger.jpg";
import './containers.css'

function AboutUs() {
  return (
    <>
      <Header />
      <Container>
        {/* <main role="main"> */}

        <section class="jumbotron text-center">
          <div class="container">
            <h1 class="jumbotron-heading">FoodGrid</h1>
            <p class="lead text-muted">
              FoodGrid, a solution to share food before it goes to waste.
            </p>
            <p>
              <a href="#" class="btn btn-primary my-2">
                DONATE NOW
              </a>
              <a href="#" class="btn btn-secondary my-2">
                IN NEED?
              </a>
            </p>
          </div>
        </section>
      <div style= {{background: "linear-gradient(to left, #6699cc,rgb(161, 237, 241) 50%, rgb(161, 237, 241) 50%, #6699cc 75%)"}}>
        <div class="album py-5">
          <div class="container">
            <div class="d-flex justify-content-between align-items-center">
              <div class="col-md-4">
                <div>
                  <img
                    class="card-img-top"
                    src={kinhhypicture}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h3>KinhHy Chau</h3>
                    <p class="card-text">
                    DIRECTOR OF TALENT DEVELOPMENT

                    </p>
                    <div class="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div>
                  <img
                    class="card-img-top"
                    src={diegopicture}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h3>Diego Gomez</h3>
                    <p class="card-text">CO-FOUNDER AND PRESIDENT</p>
                    <div class="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="col-md-4">
                <div>
                  <img
                    class="card-img-top"
                    src={marcpicture}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h3>Marc Ranger</h3>
                    <p class="card-text">
                    CO-FOUNDER AND CEO
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div>
                  <img
                    class="card-img-top"
                    src={markpicture}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h3>Mark Peterson</h3>
                    <p class="card-text">DIRECTOR OF OFFICE SUPPLIES REPLENISHMENT
                    </p>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>

        <footer class="text-muted">
          <div class="container">
            <p class="float-right">
              <a href="#">Back to top</a>
            </p>
            <p>
              <a href="../../">Visit the homepage</a>
            </p>
            {/* <p>
              Technologies used to build this site{" "}
              <a href="../../technologies">Learn More</a>.
            </p> */}

            <p class="float-right">
              <LinkContainer to="/technologies">
                <Nav.Link>Technologies used to build</Nav.Link>
              </LinkContainer>
            </p>
          </div>
        </footer>
        </div>

      </Container>
    </>
  );
}
export default AboutUs;
