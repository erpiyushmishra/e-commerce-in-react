import React, { useContext } from 'react'
import { ShopContext } from '../Components/ShopContext/ShopContext'
import {all_product} from '../Components/Assets/all_product'
import CartItem from '../Components/CartItem/CartItem';

const Cart = () => {
    const {cartItems} = useContext(ShopContext);
  return (
    <div>
      <CartItem/>
        
    </div>
  )
}

export default Cart