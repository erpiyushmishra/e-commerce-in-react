import React from 'react'
import './NewCollection.css'
import new_collection from '../Assets/new_collections'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='collection'>
        <p>New Collection</p>
        <hr/>
        <div className="collection-item">
            {new_collections.map((item)=>{
                return <Item id={item.id}  name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
        
        

    </div>
  )
}

export default NewCollection