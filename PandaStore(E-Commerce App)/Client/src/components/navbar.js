import React from "react";
import logo from "../image/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  return (
    <>
      <header>
        <h1>
          {" "}
          <img src={logo} alt="" width="150px" height="100px" />
          <i>Panda Shop</i>
        </h1>
      </header>
      <nav class="navbar navbar-expand-lg bg-body-primary">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a aria-current="page" href="/home">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li class="nav-item">
              <a href="/shop">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li class="nav-item">
              <a href="/categories">
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;Categories&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li class="nav-item">
              <a href="/account">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Account&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li class="nav-item">
              <a className="button" href="/shop">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <li>
              <a href="/Services">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <a href="/cart">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <i class="bi bi-cart-check" style={{ color: "white" }}></i>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
            <li class="nav-item">
              <a style={{ color: "white", padding: "0.5rem" }} href="/aboutUs">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; About
                Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </a>
            </li>
            <a className="button" href="/login">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Logout&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </a>
          </ul>
        </div>
      </nav>
      <br></br>
    </>
  );
}
export default Navbar;

