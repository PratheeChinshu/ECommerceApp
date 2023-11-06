import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../css/update.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setitem] = useState({
    item_name: "",
    item_type: "",
    description: "",
    price: "",
    size: "",
    manufacturer: "",
    item_image: "",
  });

  useEffect(() => {
    Axios.get(`http://localhost:4000/item/${id}`).then((res) => {
      setitem(res.data);
    });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setitem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setitem({
          ...item,
          item_image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(
        `http://localhost:4000/item/${id}`,
        item
      );
      console.log("Item updated:", response.data);
      if (response.status === 200) {
        toast.success("Item updated successfully", {
          position: "bottom-left",
        });
        setTimeout(() => {
          navigate("/view");
        }, 1000);
      } else {
        toast.error("Item update failed", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      console.error("Error updating item:", error);
      toast.error("Error updating item", {
        position: "bottom-left",
      });
    }
  };
  return (
    <>
      <center>
        <div class="formbold-main-wrapper">
          <div class="formbold-form-wrapper">
            <form onSubmit={handleUpdate}>
              <h1 class="heading">Update</h1>
              <br class="break"></br>
              <img src={item.item_image} className="card-img-top" alt="Card" />
              <br></br>
              <hr></hr>
              <div class="formbold-input-flex">
                <label class="formbold-form-label">image</label>
                <input
                  type="file"
                  class="formbold-form-input"
                  id="item_image"
                  placeholder=".jpeg file"
                  onChange={handleImageChange}
                  accept="image/*"
                ></input>
              </div>
              <div class="formbold-input-flex">
                <div>
                  <input
                    type="text"
                    name="item_name"
                    value={item.item_name}
                    onChange={handleInputChange}
                    class="formbold-form-input"
                  />
                  <label class="formbold-form-label">Recipe Name</label>
                </div>
                <div>
                  <input
                    class="formbold-form-input"
                    type="text"
                    name="item_type"
                    value={item.item_type}
                    onChange={handleInputChange}
                  />
                  <label class="formbold-form-label">Ingredients</label>
                </div>
              </div>
              <div class="formbold-input-flex">
                <div>
                  <input
                    class="formbold-form-input"
                    type="text"
                    name="instructions"
                    value={item.description}
                    onChange={handleInputChange}
                  />
                  <label class="formbold-form-label"> Instructions </label>
                </div>
                <div>
                  <input
                    class="formbold-form-input"
                    type="text"
                    name="price"
                    value={item.price}
                    onChange={handleInputChange}
                  />
                  <label class="formbold-form-label"> Cooking time</label>
                </div>
              </div>
              <div class="formbold-input-flex">
                <div>
                  <input
                    class="formbold-form-input"
                    type="text"
                    name="size"
                    value={item.size}
                    onChange={handleInputChange}
                  />
                  <label class="formbold-form-label"> Nutritional Info</label>
                </div>
                <div>
                  <input
                    class="formbold-form-input"
                    type="text"
                    name="manufacturer"
                    value={item.manufacturer}
                    onChange={handleInputChange}
                  />
                  <label class="formbold-form-label">Chef</label>
                </div>
              </div>
              <div class="formbold-bottom">
                <button class="formbold-btn" type="button">
                  <a class="formbold-anchor " href="/view">
                    Cancel
                  </a>
                </button>
                <button class="formbold-btn" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </>
  );
}

export default Update;
