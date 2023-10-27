import React from 'react';
import logo from "../image/logo.png"
function Navbar(){
return(
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
        <input type="text" placeholder="Search products..." />
        <button type="submit">Search</button>
    </div>
    <a href="/Services">Services</a>
    <a href="/aboutUs">About Us</a>
    <a href="#">Chatbot</a>
    <a className="button" href="/login">Logout</a>
    </nav>
    <br></br>
    </>
);
}
export default Navbar;