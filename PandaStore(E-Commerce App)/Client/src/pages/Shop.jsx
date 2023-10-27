
import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../css/view.css"
import logo from '../image/logo.png';
import { useNavigate } from "react-router-dom";
function MyItems() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Renamed from filteredRecipes
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // Create a function to filter recipes based on the search query
    const filterItems = () => {
      const filtered = fdata.filter((item) =>
        item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.item_type.toString().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())||
        item.price.toLowerCase().includes(searchQuery.toLowerCase())||
        item.size.toLowerCase().includes(searchQuery.toLowerCase())||
        item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredRecipes(filtered);
    };

    filterItems(); // Initial filtering

    // Use a timer to update the filtered recipes after a brief delay
    const timer = setTimeout(filterItems, 500);

    return () => clearTimeout(timer); // Cleanup timer
  }, [fdata, searchQuery]);

  useEffect(() => {
    Axios.get("http://localhost:4000/item")
      .then((res) => {
        console.log(res.data); // Add this line to check the API response
        setFData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const addToCart = (itemId) => {
    console.log("Adding item to cart:", itemId);
  
    Axios.post(`http://localhost:4000/cart/add/${itemId}`, null, {
      withCredentials: true,
    })
      .then((res) => {
        console.log("Response from the server",res.data); // Log the success message
        setCartItems((prevItems) => [...prevItems, itemId]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error.message);
      });
  };
  
  const StarRating = () => {
    const getRandomStars = () => {
      const numStars = Math.floor(Math.random() * 5) + 1; // Generates a random number between 1 and 5
      return Array.from({ length: numStars }, (_, index) => (
        <span key={index} className="star">&#9733;</span>
      ));
    };
  
    return <div className="star-rating">{getRandomStars()}</div>;
  };

  return (
    <>
         <header>
        <h1> <img src={logo} alt="" width="150px" height="100px" /><i>Panda Shop</i></h1>
      </header>

      <nav>
                <a href="/home">Home</a>
                <a href="/shop">Shop</a>
                <a href="/categories">Categories</a>
                <a href="#">Account</a>
                <div className="search-bar">
                    <input type="text" placeholder="Search products..." 
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)} />
                    <button type="submit">Search</button>
                </div>
                <a href="/Services">Services</a>
                <a href="/aboutUs">About Us</a>
                <a href="#">Chatbot</a>
                <a className="button" href="/login">Logout</a>
            </nav>
<div className="myitem-container">
        

        <h3 className="text-center mt-4 mb-3" style={{ color: "#FFFFFFF", fontWeight: "bold", fontSize: "34px" }}>
        </h3>

        <div className="row g-4">
          {filteredRecipes.map((item) => (
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
                  <p className="mb-2 user-input">
                    <strong>Category:</strong> {item.item_type}
                  </p>
                  <p className="card-text">
                    <strong>Description:</strong> {item.description}
                  </p>
                  <p className="card-text">
                    <strong>price:</strong> {item.price}
                  </p>
                  <p className="card-text">
                    <strong>size:</strong> {item.size}
                  </p>
                  <p className="card-text">
                    <strong>Manufacturer:</strong> {item.manufacturer}
                  </p>
                  <div className="star-rating">Rating:{StarRating()}</div>
                  <center><a className="cta-button" href="/check-out">
                Shop Now
            </a>    <button className="cta-button" onClick={() => addToCart(item._id)}>
                  Add to Cart
                </button></center>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyItems;
