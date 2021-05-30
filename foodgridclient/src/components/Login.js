import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Container, Form, Button } from "react-bootstrap"
import '../components/containers.css'
import { useHistory } from 'react-router-dom'

function LoginUser() {
  const history = useHistory()
  const [user, setUser] = useState({
    userName: '',
    password: '',
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
  function LogInUser(e) {
    e.preventDefault()
    alert('logged in')
    // const newItem = {
    //   itemName: item.itemName,
    //   itemSize: item.itemSize,
    //   itemQuantity: item.itemQuantity,
    // };
    axios.get('/', LogInUser) //put new item here
    history.push("/LoggedIn")
  }
  return (
    <Container className="Container">
    <form>
  <section>
  <div class="form-group">
    <div style={ {textAlign:'center'} }>  
      <label style={ {fontWeight: "bold"},{color: "white"}}>Email address</label>
    </div>  
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  </section>
  <div>
  <div class="form-group">
  <div style={ {textAlign:'center'} }>
      <label style={ {fontWeight: "bold"},{color: "white"}}>Password</label>
    </div>  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  </div>
  <div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <div style={ {textAlign:"justify"} }>
      <label class="form-check-label" style={ {fontWeight: "bold"},{color: "white"}}>Remember Me</label>
    </div>  
  </div>
  </div>
  <div style={ {textAlign:'center'} }>  
    {/* <button type="submit" class="btn btn-primary" onClick={{LogInUser}}>Submit</button>
     */}
      <Button onClick={LogInUser}>Submit</Button>
  </div>  
</form>
</Container>
  )
}

export default LoginUser
