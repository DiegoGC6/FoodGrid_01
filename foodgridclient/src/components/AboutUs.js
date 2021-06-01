import React from 'react'
import { Image, Container } from 'react-bootstrap'
import kinhhypicture from '../images/KinhHyChau.jpg'
import diegopicture from '../images/diego.jpg'
import HeaderLoggedIn from './HeaderLoggedIn'
import markpicture from '../images/Mark_Peterson.jpeg'
import marcpicture from '../images/Marc_Ranger.jpg'


function AboutUs () {
  return (
    <>
      <HeaderLoggedIn />
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
        <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              {/* <div class="col-md-4">
                <div>
                  <img
                    class="card-img-top"
                    src={kinhhypicture}
                    alt="Card image cap"
                  ></img>
                  <h3>KinhHy Chau</h3>
                  <div class="card-body">
                    <p class="card-text">
                    A newbie of Web developer world. A member of Cohort 6 now
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div> */}
              <div class="col-md-4">
                <div>
                  <img
                    class="card-img-top"
                    src={kinhhypicture}
                    alt="Card image cap"
                  ></img>
                  <div class="card-body">
                    <h3>KinhHy Chau</h3>
                    <p class="card-text">A newbie of Web developer world. A member of Cohort 6 now</p>
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
                    <p class="card-text">Diego is a learner at EvolveU</p>
                    <div class="d-flex justify-content-between align-items-center"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
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
                      A senior IT professional with over 25 years experience.
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
                    <p class="card-text">
                      -----------------------------
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
              Album example is &copy; Bootstrap, but please download and
              customize it for yourself!
            </p>
            <p>
              New to Bootstrap? <a href="../../">Visit the homepage</a> or read
              our <a href="../../getting-started/">getting started guide</a>.
            </p>
          </div>
        </footer>
      </Container>
    </>
  );
}
export default AboutUs



