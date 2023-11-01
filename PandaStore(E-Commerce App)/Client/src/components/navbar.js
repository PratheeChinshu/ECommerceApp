import React from 'react';
import logo from "../image/logo.png"
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    <a href="/account">Account</a>
    {/* <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button type="submit" >Search</button>
    </div> */}<a className="button" href="/shop">Search</a>
    <a href="/Services">Services</a>
    <a href="/cart"><i class="bi bi-cart-check" style={{color:'white'}}></i></a>
    <a href="/aboutUs">About Us</a>
    <a href="#">Chatbot</a>
    <a className="button" href="/login">Logout</a>
    </nav>
    <br></br>
    </>
);
}
export default Navbar;