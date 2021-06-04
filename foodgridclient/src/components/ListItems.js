import { useState, useEffect } from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Container, Button, Nav } from 'react-bootstrap'
import axios from "axios";
import HeaderLoggedIn from './HeaderLoggedIn'
import './containers.css'

function ListItems() {
  const [items, setItems] = useState([
    {
      itemName: "",
      itemSize: "",
      itemQuantity: "",
      userName: "",
      expiryDate: ""
    },
  ]);

  useEffect(() => {
    fetch("/items")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((jsonRes) => setItems(jsonRes));
  });

  function deleteItem(id) {
    axios.delete("/items/" + id);
    alert("item deleted");
  }

  return ( 
    <div>
    <HeaderLoggedIn />
    
    {items.map((item) =>  { return  <>
      
      <Container className="Container2">
      
      {/* <div style={{ marginLeft: 50 }}> */}
        <div class="margin">
        <h1 style={{textAlign: "center"}}>{item.itemName}</h1>
        <p>Size: {item.itemSize}</p>
        <p>Quantity: {item.itemQuantity}</p>
        <p>Poster Name: {item.userName}</p>
        <p>Expiry Date: {item.expiryDate}</p>
        <p>Posted on: {item.postDate}</p>
        {/* <button onClick={() => deleteItem(item._id)}>DELETE ITEM</button> */}
        <div style={{textAlign: "center"}}>
           <Button onClick={() => deleteItem(item._id)}>Delete Item</Button>
           </div>
      </div>
          
        </Container>;
        <footer class="text-muted">
          <div class="container">
            <p class="float-right">
              <a href="#">Back to top</a>
            </p>
          </div>
        </footer> 
        </>
        }
    
  
    
    // return (      
    // <>
      
      //   <Container className="Container2">
      
      // <div style={{ marginLeft: 50 }}>
      //   <h1>{item.itemName}</h1>
      //   <p>Size: {item.itemSize}</p>
      //   <p>Quantity: {item.itemQuantity}</p>
      //   <p>Poster Name: {item.userName}</p>
      //   <p>Expiry Date: {item.expiryDate}</p>
      //   <p>Posted on: {item.postDate}</p>
      //   <button onClick={() => deleteItem(item._id)}>DELETE ITEM</button>
      // </div>
    
      //   </Container>
    // </>
    // );
  
  )};
  </div>
  );
  
}

export default ListItems;
