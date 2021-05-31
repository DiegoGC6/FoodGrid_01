// import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../components/containers.css'

function AddUser() {
  const history = useHistory()
  const [user, setUser] = useState({
    userName: '',
    email: '',
    password: '',
    phoneNumber: '',
    communityName: '',
    contactMethod: '',
  })

  function handleChange(e) {
    console.log('change is being handled')
    const { name, value } = e.target
    setUser((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }

  function addUser(e) {
    e.preventDefault()
    alert('user added')
    const newUser = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      phoneNumber: user.phoneNumber,
      communityName: user.communityName,
      contactMethod: user.contactMethod,
    }
    axios.post('/users', newUser) //put new item here
   history.push("/login")
  }

  return (
    <Container className="Container2">
      <div class='Registration-box'>
        <div>
          <h2 style={{textAlign: "center"}}>Sign Up</h2>
        </div>  
        <form>
        <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
            <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>User Name</label>
            </div>
            <input
              onChange={handleChange}
              name='userName'
              style={{textAlign: "center"}} placeholder='name'
              value={user.userName}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
          <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>Email</label>
            </div>
            <input
              onChange={handleChange}
              type='email'
              name='email'
              style={{textAlign: "center"}} placeholder='email'
              value={user.email}
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>
          <div class='User-box'>
          <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>Password</label>
          </div>
            <input
              onChange={handleChange}
              type='password'
              name='password'
              style={{textAlign: "center"}} placeholder='password'
              value={user.password}
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>
          <div class='User-box'>
          <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>Phone Number</label>
          </div>
            <input
              onChange={handleChange}
              name='phoneNumber'
              style={{textAlign: "center"}} placeholder='phone number'
              value={user.phoneNumber}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>
          <div class='User-box'>
          <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>community Name</label>
            </div>
            <input
              onChange={handleChange}
              name='communityName'
              style={{textAlign: "center"}} placeholder='Community'
              value={user.communityName}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>
          <div class='User-box'>
          <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>contact Method</label>
            </div>
            <input
              onChange={handleChange}
              name='contactMethod'
              style={{textAlign: "center"}} placeholder='Contact Method'
              value={user.contactMethod}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "center"}}>
          <Button onClick={addUser}>Submit</Button>
          </div>
        </form>
      </div>
      </Container>  
  )
}

export default AddUser
