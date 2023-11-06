import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "../css/Check_Out.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Check_Out = () => {
  const navigate = useNavigate();
  const [addressData, setAddressData] = useState({
    fullName: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "", // Updated state to be a dropdown selection
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setAddressData({
      ...addressData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
    console.log(addressData);
  };

  // ...

  const states = [
    "Select State",
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Puducherry",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // ...

  return (
    <>
      <Navbar />
      <div>
        <div className="address-form">
          <h2>Add Address</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Name"
              value={addressData.fullName}
              onChange={handleChange}
              required
            />
            <br></br>
            <label htmlFor="mobileNumber">Mobile Number:</label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="10-digit mobile number"
              value={addressData.mobileNumber}
              onChange={handleChange}
              required
            />
            <br></br>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Address(Area and Street)"
              value={addressData.address}
              onChange={handleChange}
              required
            />
            <br></br>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="city/district/town"
              value={addressData.city}
              onChange={handleChange}
              required
            />
            <br></br>
            <label htmlFor="state">State:</label>
            <select
              id="state"
              name="state"
              value={addressData.state}
              onChange={handleChange}
              required
            >
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <br></br>
            <label htmlFor="pincode">Pin Code:</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              placeholder="Pincode"
              value={addressData.pincode}
              onChange={handleChange}
              required
            />
            <br></br>
            <div>
              <input
                type="checkbox"
                name="isDefault"
                checked={addressData.isDefault}
                onChange={handleChange}
              />
              Make this my default addresss
            </div>
            <br></br>
            <input type="submit" value="Add Address" />
          </form>
        </div>
        <br></br>
        <div className="addres-form">
          <h4>
            <u>Price details</u>
          </h4>
          <br></br>
          <div>
            <ul>Price(1 item) </ul>
            <ul>Delivery charges </ul>
          </div>
        </div>
        <br></br>
      </div>
      <Footer />
    </>
  );
};

export default Check_Out;
