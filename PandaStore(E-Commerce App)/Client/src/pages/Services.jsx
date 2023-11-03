import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import add from "../image/add.jpg";
import view from "../image/view.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const Services = () => {
  const [inputValue, setInputValue] = useState({
    item_name: "",
    item_type: "",
    description: "",
    price: "",
    size: "",
    manufacturer: "",
    item_image: "",
  });
  const {
    item_name,
    item_type,
    description,
    price,
    size,
    manufacturer,
    item_image,
  } = inputValue;

  const handleOnChange = (e) => {
    const { id, value } = e.target;
    setInputValue({
      ...inputValue,
      [id]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const read = new FileReader();
      read.onloadend = () => {
        setInputValue({
          ...inputValue,
          item_image: read.result,
        });
      };
      read.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/additem",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        alert("Item Added Successfully !!!");
      } else {
        alert(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      item_name: "",
      item_type: "",
      description: "",
      price: "",
      size: "",
      manufacturer: "",
      item_image: "",
    });
  };
  return (
    <>
      <Navbar />

      <br></br>
      <center>
        <h1>Welcome </h1>
        <p>You can sell your product here!</p>
      </center>
      <div class="container-fluid">
        <div class="row">
          <div class=" col-sm-12 col-md-4 col-lg-2"></div>
          <div class=" col-sm-12 col-md-4 col-lg-3">
            <div class="card">
              <img src={add} alt="" width="auto" height="250px"></img>
              <div class="card-body">
                <h5 class="card-title">Add Item</h5>
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {" "}
                  Add
                </button>
              </div>
            </div>
          </div>
          <div class=" col-sm-12 col-md-4 col-lg-2"></div>
          <div class=" col-sm-12 col-md-4 col-lg-3">
            <div class="card">
              <img src={view} alt="" width="auto" height="250px"></img>
              <div class="card-body">
                <h5 class="card-title">View Item</h5>
                <a
                  href="/view"
                  class="btn btn-success"
                  style={{ backgroundcolor: "#FFA500" }}
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div class=" col-sm-12 col-md-4 col-lg-2"></div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Items to the App
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div>
                <form onSubmit={handleSubmit}>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Item Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="item_name"
                      placeholder="Enter item name"
                      value={item_name}
                      onChange={handleOnChange}
                      required
                      aria-describedby="emailHelp"
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Item type
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="item_type"
                      placeholder="Enter item type"
                      value={item_type}
                      onChange={handleOnChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      description:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Enter  description"
                      value={description}
                      onChange={handleOnChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      price
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      placeholder="Enter the  price"
                      value={price}
                      onChange={handleOnChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      size
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="size"
                      placeholder="Enter the size"
                      value={size}
                      onChange={handleOnChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Manufacturer
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="manufacturer"
                      placeholder="Enter the manufacturer"
                      value={manufacturer}
                      onChange={handleOnChange}
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id=" item_image"
                      placeholder=".jpeg file"
                      onChange={handleImageChange}
                      accept=" item_image/*"
                    ></input>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn" data-bs-dismiss="modal">
                      Close
                    </button>
                    <button type="submit" class="btn">
                      Add Item
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Services;
