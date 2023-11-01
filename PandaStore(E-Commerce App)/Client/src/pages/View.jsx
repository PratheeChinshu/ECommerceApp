import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import { Link } from "react-router-dom";
import "../css/view.css";
import logo from "../image/logo.png";
function MyItems() {
  const [fdata, setFData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]); // Renamed from filteredRecipes

  useEffect(() => {
    // Create a function to filter recipes based on the search query
    const filterItems = () => {
      const filtered = fdata.filter(
        (item) =>
          item.item_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.item_type.toString().includes(searchQuery) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.size.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredItems(filtered);
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
  const handleDelete = (itemId) => {
    Axios.delete(`http://localhost:4000/item/${itemId}`)
      .then((res) => {
        if (res.status === 200) {
          // Recipe deleted successfully
          setFData((prevData) =>
            prevData.filter((item) => item._id !== itemId)
          );
        } else {
          alert("Error deleting item: " + res.data.message);
          console.error("Error deleting item:", res.data.message);
        }
      })
      .catch((error) => {
        alert("Error deleting item: " + error.message);
        console.error("Error deleting item:", error.message);
      });
  };

  return (
    <>
      <header>
        <h1>
          {" "}
          <img src={logo} alt="" width="150px" height="100px" />
          <i>Panda Shop</i>
        </h1>
      </header>
      <nav>
        <a href="/home">Home</a>
        <a href="/shop">Shop</a>
        <a href="/categories">Categories</a>
        <a href="#">Account</a>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
        <a href="/Services">Services</a>
        <a href="/aboutUs">About Us</a>
        <a href="#">Chatbot</a>
        <a className="button" href="/login">
          Logout
        </a>
      </nav>
      <div className="myitem-container">
        <h3
          className="text-center mt-4 mb-3"
          style={{ color: "#FFFFFFF", fontWeight: "bold", fontSize: "34px" }}
        ></h3>

        <div className="row g-4">
          {filteredItems.map((item) => (
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
                    <strong>description:</strong> {item.description}
                  </p>
                  <p className="card-text">
                    <strong>price:</strong> {item.price}
                  </p>
                  <p className="card-text">
                    <strong>size:</strong> {item.size}
                  </p>
                  <p className="card-text">
                    <strong>manufacturer:</strong> {item.manufacturer}
                  </p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <a
                      href={`/update/${item._id}`}
                      className="btn btn-success me-2"
                    >
                      Update
                    </a>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </div>
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
