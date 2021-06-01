import { useState } from 'react'
import axios from 'axios'
import { Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import '../components/containers.css'
import HeaderLoggedIn from '../components/HeaderLoggedIn'

//import "./AddItem.css";

function AddItem() {
  const history = useHistory()
  const [item, setItem] = useState({
    itemName: '',
    itemSize: '',
    itemQuantity: '',
    userName: '',
    expiryDate: '',
  })
  function handleChange(e) {
    console.log('change is being handled')
    const { name, value } = e.target
    setItem((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      }
    })
  }
  function addItem(e) {
    e.preventDefault()
    alert('item added')
    const newItem = {
      itemName: item.itemName,
      itemSize: item.itemSize,
      itemQuantity: item.itemQuantity,
      userName: item.userName,
      expiryDate: item.expiryDate
    }
    axios.post('/items', newItem) //put new item here
    
    history.push("/listitems")
  }
  

  return (
    <>
    <HeaderLoggedIn />
     <Container className="Container2">  
      <div class='Registration-box'>
        <div>  
          <h2 style={{textAlign: "center"}}>Add Item</h2>
          </div>
        <form>
        <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
            <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>Name</label>
            </div>
            <input style={{textAlign: "center"}}
              onChange={handleChange}
              name='itemName'
              placeholder='item name'
              value={item.itemName}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
            <div style={{textAlign: "center"}}>
              <label htmlFor='itemSize'>Size</label>
            </div>
            <input style={{textAlign: "center"}}
              onChange={handleChange}
              name='itemSize'
              placeholder='item size'
              value={item.itemSize}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
            <div style={{textAlign: "center"}}>
              <label htmlFor='itemQuantity'>Quantity</label>
            </div>
            <input style={{textAlign: "center"}}
              onChange={handleChange}
              name='itemQuantity'
              placeholder='item Quantity'
              value={item.itemQuantity}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
            <div style={{textAlign: "center"}}>
              <label htmlFor='userName'>User Name</label>
            </div>
            <input style={{textAlign: "center"}}
              onChange={handleChange}
              name='userName'
              placeholder='user name'
              value={item.userName}
              type='text'
            ></input>
          </div>
          </div>
          <div style={{textAlign: "inherit"}}>  
          <div class='User-box'>
            <div style={{textAlign: "center"}}>
              <label htmlFor='expiryDate'>Expiry Date</label>
            </div>
            <input style={{textAlign: "center"}}
              onChange={handleChange}
              name='expiryDate'
              placeholder='item name'
              value={item.expiryDate}
              type='date'
            ></input>
          </div>
          </div>
             <div style={{textAlign: "center"}}>
           <Button onClick={addItem}>Submit</Button>
           </div>
        </form>
      </div>
    </Container>
    </>  
  )
}

export default AddItem
