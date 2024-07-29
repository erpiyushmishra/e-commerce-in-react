import React from 'react'
import './ShopBanner.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import arrow from '../Assets/arrow.png'

const ShopBanner = () => {
  return (
    <div className='ShopBanner'>
        <div className="ShopBanner-left">
            <div className="ShopBanner-left-container">
                <p>NEW ARRIVALS ONLY</p>
                <h1>new <img src={hand_icon} alt="" /> <br/>collections <br/>for everyone</h1>
                <div className="ShopBanner-latest-collection">
                    Latest Collection 
                    <img src={arrow} alt="" />
                </div>
            </div>

        </div>
        <div className="ShopBanner-right">
            <img src={hero_image} alt="" />

        </div>

    </div>
  )
}

export default ShopBanner