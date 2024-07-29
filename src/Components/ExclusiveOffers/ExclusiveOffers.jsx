import React from 'react'
import './ExclusiveOffers.css'
import exclusive_image from '../Assets/exclusive_image.png'


const ExclusiveOffers = () => {
  return (
    <div className='exclusive'>
        <div className="exclusive-left">
            <div className="exclusive-left-container">
                <h1>Exclusive <br/>Offers for <br/>You</h1>
                <p>ONLY ON THE BEST SELLERS PRODUCT</p>
                <button>Check Now</button>
            </div>

        </div>
        <div className="exclusive-right">
            <img src={exclusive_image} alt="" />

        </div>

    </div>
  )
}

export default ExclusiveOffers