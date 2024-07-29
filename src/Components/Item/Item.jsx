import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({id, name, image, old_price, new_price}) => {
  return (
    <div className='item'>
      <Link to={`/product/${id}`}><img src={image} productid={id} alt="" /></Link>

      
      <p className='item-name'>{name}</p>
      <div className="item-price">
          <p className='new-price'>${new_price}</p>
          <p className='old-price'>${old_price}</p>
      </div>


    </div>
  )
}

export default Item