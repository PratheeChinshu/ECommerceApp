import React, { useState } from "react";
import axios from "axios";
import "../css/Payment.css";
const Payment = ({ cartItems, totalAmount }) => {
  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    // Add more shipping details as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails({
      ...shippingDetails,
      [name]: value,
    });
  };

  const handleCheckout = async () => {
    try {
      // You may need to send a request to your server to process the order
      const response = await axios.post(
        "http://localhost:4000/checkout",
        {
          cartItems,
          totalAmount,
          shippingDetails,
          // Add more information as needed
        },
        { withCredentials: true }
      );

      // Handle the response accordingly (e.g., redirect to order confirmation page)
      console.log(response.data);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <center>
        <div class="cont">
          <form id="checkout">
            <label>Credit Card Number</label>
            <input
              id="cardnumber"
              type="text"
              pattern="[0-9]{13,16}"
              name="cardnumber"
              requierd="true"
              placeholder="0123-4567-8901-2345"
            />

            <label>Card Holder</label>
            <input
              id="cardholder"
              type="text"
              name="name"
              requierd="true"
              maxlength="50"
              placeholder="Cardholder"
            />

            <label>Expiration Date</label>

            <div id="left">
              <select name="month" id="month" onchange="" size="1">
                <option value="00">MM</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select name="year" id="year" onchange="" size="1">
                <option value="00">YY</option>
                <option value="01">16</option>
                <option value="02">17</option>
                <option value="03">18</option>
                <option value="04">19</option>
                <option value="05">20</option>
                <option value="06">21</option>
                <option value="07">22</option>
                <option value="08">23</option>
                <option value="09">24</option>
                <option value="10">25</option>
              </select>
            </div>

            <label id="cvc-label">CVC/CVV</label>
            <input id="cvc" type="text" placeholder="Cvc/Cvv" maxlength="3" />
            <br></br>
            <input
              class="btn-purchase"
              type="button"
              name="purchase"
              value="Purchase"
            />
            <br></br>
            <center>
              <a className="button-small" href="/shop">
                Cancel
              </a>{" "}
            </center>
          </form>
        </div>
      </center>
    </>
  );
};

export default Payment;
