import { useState, useEffect } from "react";
import axios from "axios";

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

  return items.map((item) => {
    return (
      <div style={{ marginLeft: 50 }}>
        <h1>{item.itemName}</h1>
        <p>Size: {item.itemSize}</p>
        <p>Quantity: {item.itemQuantity}</p>
        <p>Poster Name: {item.userName}</p>
        <p>Expiry Date: {item.expiryDate}</p>
        <p>Posted on: {item.postDate}</p>
        <button onClick={() => deleteItem(item._id)}>DELETE ITEM</button>
      </div>
    );
  });
}

export default ListItems;
