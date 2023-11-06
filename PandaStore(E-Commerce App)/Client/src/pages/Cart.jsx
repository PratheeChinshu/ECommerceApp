import React, { useEffect, useState } from "react";
import Axios from "axios";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from the server
    Axios.get("http://localhost:4000/viewcart", { withCredentials: true })
      .then((res) => {
        console.log(res.data); // Log the cart data
        setCartItems(res.data.items); // Assuming your API response structure has an 'items' property
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  }, []);

  const removeFromCart = (itemId) => {
    Axios.delete(`http://localhost:4000/cart/remove/${itemId}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data); // Log the success message
        // Update the cart items state after successful removal
        setCartItems((prevItems) =>
          prevItems.filter((item) => item.item._id !== itemId)
        );
      })
      .catch((error) => {
        console.error("Error removing item from cart:", error);
      });
  };

  return (
    <>
      <Navbar />
      <style>
        {`
          .common-btn {
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-right: 10px;
            text-decoration: none;
            color: #fff;
            font-weight: bold;
            display: inline-block;
            background-color:rgb(151,69,69)
          }
        `}
      </style>

      <div className="container mt-5">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cartItems.map((item) => (
              <div className="col" key={item._id}>
                <div className="card h-100">
                  <img
                    src={item.item.item_image}
                    className="card-img-top"
                    alt={item.item.item_name}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.item.item_name}</h5>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Price: {item.item.price}</p>
                    <button
                      className="btn common-btn"
                      onClick={() => removeFromCart(item.item._id)}
                    >
                      Remove from Cart
                    </button>
                    <Link to={`/items/${item._id}`} className=" btn common-btn">
                      Shop Now
                    </Link>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
