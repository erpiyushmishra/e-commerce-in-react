import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext/ShopContext";

const Navbar = () => {
  const{getTotalCartItems}=useContext(ShopContext)
  const [activeSection, setActiveSection] = useState("Shop");
  const clicked = (section) => {
    setActiveSection(section);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-container-left">
        <img src={logo} alt="" />
        <h1>CRAVE.</h1>
      </div>
      <div className="navbar-container-center">
        <div
          className="navbar-container-center-shop"
          onClick={() => clicked("Shop")}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {activeSection === "Shop" && <hr />}
        </div>
        <div
          className="navbar-container-center-men"
          onClick={() => clicked("Men")}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
          {activeSection === "Men" && <hr />}
        </div>
        <div
          className="navbar-container-center-women"
          onClick={() => clicked("Women")}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>
          {activeSection === "Women" && <hr />}
        </div>
        <div
          className="navbar-container-center-kid"
          onClick={() => clicked("Kid")}
        >
          <Link style={{ textDecoration: "none" }} to="/kid">
            Kid
          </Link>
          {activeSection === "Kid" && <hr />}
        </div>
      </div>
      <div className="navbar-container-right">
        <Link to='/login' style={{textDecoration:"none"}}>
          <div className="navbar-container-right-login">LogIn</div>
        </Link>
        <div className="navbar-container-right-cart">
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="navbar-container-right-cart-quantity">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
