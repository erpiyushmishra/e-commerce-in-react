import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../ShopContext/ShopContext";

const ProductDisplay = ({ product }) => {
  const {addToCart, cartItems} = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-items">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-display-main">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>

        </div>
        <div className="product-right-prices">
          <span className="product-right-oldprice">${product.old_price}</span>
          <span className="product-right-newprice">${product.new_price}</span>
        </div>
        <p>A lightweight, usually knitted pullover shirt, close -fitting and a round neckline and short sleeves, worn as an undershirt.</p>
        <div className="product-right-size">
          <p>Select Sizes:</p>
          <div className="product-right-size-list">
            <span>S</span>
            <span>M</span>
            <span>L</span>
            <span>XL</span>
            <span>XXL</span>
          </div>
          
        </div>
        <button onClick={()=>addToCart(product.id)}>Add To Cart</button>
        {console.log(cartItems)}


      </div>
    </div>
  );
};

export default ProductDisplay;
