import React, { useState, useEffect } from "react";
import "../css/Account.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import profile from "../image/profile.png";
import { Chat } from "../components/Chatbot";
const UserProfile = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:4000",
          {},
          { withCredentials: true }
        );
        const { status, user, email } = data;

        if (status) {
          setUsername(user);
          setEmail(email);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          toast.error("Invalid token. Please log in again.", {
            position: "top-right",
          });
        }
      } catch (error) {
        console.error("Error verifying cookie:", error);
      }
    };

    verifyCookie();
  }, []); // Empty dependency array to run only once on mount

  const profilePicStyle = {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <img
        src={profile} // Assuming you have a 'profilePicUrl' property in your user object
        alt="Profile Picture"
        className="profile-pic"
        style={profilePicStyle}
      />
      <p>Name: {username}</p>
      <p>Email: {email}</p>
      <Chat />
    </div>
  );
};

export default UserProfile;
