import React from "react";
import "../css/AboutUsPage.css";
import headerImage from "../image/flower.jpg";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Chat } from "../components/Chatbot";
const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="about-us">
        <div className="header">
          <img src={headerImage} alt="Header" />
        </div>
        <div className="content">
          <div className="text">
            <h2>Welcome to PandaShop</h2>

            <p>
              We are a passionate team dedicated to providing top-quality
              products and an exceptional shopping experience for our customers.
            </p>
            <p>
              Our mission is to make your shopping experience as enjoyable as
              possible. We offer a wide selection of products, from fashion to
              electronics, to meet your needs. With a user-friendly website,
              secure payment options, and fast shipping, we aim to exceed your
              expectations.
            </p>
            <p>
              At our core, we value customer satisfaction, innovation, and
              sustainability. We are committed to reducing our environmental
              footprint and ensuring that our products are responsibly sourced.
            </p>
            <p>
              Thank you for choosing us as your shopping destination. We look
              forward to serving you and making your online shopping experience
              truly special.
            </p>
            <p>For any inquiries or assistance, you can reach us at:</p>
            <ul>
              <li>Email: pandastore@gmail.com</li>
              <li>Phone: +913473298494</li>
              <li>Address: SCEM,Adyar,Karnataka, IIndia</li>
            </ul>
          </div>
          <div className="gif">
            <img
              src="https://victorialeeds.bgn.agency/wp-content/uploads/2019/12/Pub_xx_Xmas-fashion_Nov-19_Header.gif"
              alt="GIF"
            />
            <div className="gif-overlay">
              <h3>"Shop with Confidence"</h3>
            </div>
          </div>
        </div>
        <Chat />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
