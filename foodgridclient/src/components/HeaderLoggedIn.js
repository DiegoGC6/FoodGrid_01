import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Navbar, Nav } from 'react-bootstrap'

const HeaderLoggedIn = () => {
  return (
    <header>
      <Navbar style={{backgroundColor: 'darkBlue'}} variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              {' '}
              <i className='fas fa-home'></i>FoodGrid
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              {/* the icons are from font-awesome in cdnjs.com */}

              <LinkContainer to='/signout'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Sign Out
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Login
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/register'>
                <Nav.Link>
                  <i className='fas fa-user-plus'></i>SignUp
                </Nav.Link>
              </LinkContainer> */}

              <LinkContainer to='/listitems'>
                <Nav.Link>
                  <i className='fas fa-solid fa-list ul'></i>List Items
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/additem'>
                <Nav.Link>
                  <i className='fas fa-plus'></i>Post Item
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/chat'>
                <Nav.Link>
                  <i className='fas fa-users'></i>Chat Messages
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/mypost'>
                <Nav.Link>
                  <i className='fas fa-star'></i>New Item Post
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default HeaderLoggedIn


