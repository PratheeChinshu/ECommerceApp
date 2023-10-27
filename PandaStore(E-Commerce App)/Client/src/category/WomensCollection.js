// MensCollection.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function WomensCollection() {
  const location = useLocation();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/item/category/${location.state.category}`)
      .then((res) => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, [location.state.category, location.state]);

  return (
    <>
    <Navbar/>
    <div>
      <h2>{location.state.category} Collection</h2>
      <div className="card-container">
        {items.map((item) => (
          <Card key={item._id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.item_image} alt={item.item_name} />
            <Card.Body>
              <Card.Title>{item.item_name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Price: {item.price}</Card.Text>
              {/* Add more details as needed */}
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}