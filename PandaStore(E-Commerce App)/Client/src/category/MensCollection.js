// MensCollection.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { Chat } from "../components/Chatbot";
import Axios from "axios";
export default function MensCollection() {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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
  const StarRating = () => {
    const getRandomStars = () => {
      const numStars = Math.floor(Math.random() * 5) + 1;
      return Array.from({ length: numStars }, (_, index) => (
        <span key={index} className="star">
          &#9733;
        </span>
      ));
    };

    return <div className="star-rating">{getRandomStars()}</div>;
  };

  const addToCart = (itemId) => {
    console.log("Adding item to cart:", itemId);
    Axios.post(`http://localhost:4000/addtocart/${itemId}`, null, {
      withCredentials: true,
    })
      .then((res) => {
        console.log("Response from the server", res.data);
        setCartItems((prevItems) => [...prevItems, itemId]);
        setAddedItems((prevItems) => [...prevItems, itemId]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error.message);
      });
  };
  const isItemAdded = (itemId) => {
    return addedItems.includes(itemId);
  };

  return (
    <>
      <Navbar />
      <div>
        <h2>{location.state.category} Collection</h2>
        <div className="row g-4">
          {items.map((item) => (
            <div className="col-md-4 mb-3" key={item._id}>
              <div className="card shadow-sm">
                <img
                  src={item.item_image}
                  className="card-img-top"
                  alt="Item pic"
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.item_name}</h5>
                  <p className="card-text">
                    <strong>price:</strong> {item.price}
                  </p>
                  <p className="card-text">
                    <strong>Manufacturer:</strong> {item.manufacturer}
                  </p>
                  <div className="star-rating">Rating:{StarRating()}</div>
                  <center>
                    <Link to={`/items/${item._id}`} className="cta-button">
                      Shop Now
                    </Link>{" "}
                    {isItemAdded(item._id) ? (
                      <button className="cta-button" href="/cart">
                        Added
                      </button>
                    ) : (
                      <button
                        className="cta-button"
                        onClick={() => addToCart(item._id)}
                      >
                        Add to Cart
                      </button>
                    )}
                  </center>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Chat />
      <Footer />
    </>
  );
}
