// ItemDetails.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import "../css/ItemDetails.css";
import { Chat } from "../components/Chatbot";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function ItemDetails() {
  const { itemId } = useParams();
  const [itemDetails, setItemDetails] = useState(null);

  useEffect(() => {
    // Fetch item details using itemId
    Axios.get(`http://localhost:4000/item/${itemId}`)
      .then((res) => {
        setItemDetails(res.data);
      })
      .catch((error) => {
        console.error("Error fetching item details:", error);
      });
  }, [itemId]);

  if (!itemDetails) {
    return <div>Loading...</div>; // You can show a loader while fetching details
  }

  const {
    item_name,
    item_type,
    description,
    price,
    size,
    manufacturer,
    item_image,
  } = itemDetails;
  const StarRating = () => {
    const getRandomStars = () => {
      const numStars = Math.floor(Math.random() * 5) + 1; // Generates a random number between 1 and 5
      return Array.from({ length: numStars }, (_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ));
    };

    return <div className="star-rating">{getRandomStars()}</div>;
  };
  const handlebuy = () => {};
  return (
    <>
      <Navbar />
      <div className="item-details-container">
        <img src={item_image} alt={item_name} className="item-image" />
        <div className="item-info">
          <h2>{item_name}</h2>
          <p>
            <strong>Category:</strong> {item_type}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> {price}
          </p>
          <p>
            <strong>Size:</strong> {size}
          </p>
          <p>
            <strong>Manufacturer:</strong> {manufacturer}
          </p>
          <div className="star-rating">Rating:{StarRating()}</div>
          <a href="/check-out">
            <button className="button-add-to-cart">Shop Now</button>
          </a>
        </div>
      </div>
      <Chat />
      <Footer />
    </>
  );
}

export default ItemDetails;
