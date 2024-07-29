import React from 'react'
import './Popular.css'
import data from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <p>POPULAR IN WOMEN</p>
      <hr/>
      <div className="popular-items">
        {data.map((item)=>{
          return <Item id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

        })}

      </div>

    </div>
  )
}

export default Popular