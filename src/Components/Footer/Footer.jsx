import React from 'react'
import './Footer.css'
import logo_big from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <img className='footer-logo' src={logo_big} alt="" />
        <div className="footer-nav">
            <p>Company</p>
            <p>Products</p>
            <p>Offices</p>
            <p>About</p>
            <p>Contacts</p>
        </div>
        <div className="footer-socialmedia">
            <div className="footer-socialmedia-instagram">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-socialmedia-pinterest">
                <img src={pintester} alt="" />
            </div>
            <div className="footer-socialmedia-watsapp">
                <img src={whatsapp} alt="" />
            </div>
        </div>
        <hr />
        <p>Copy @2024 - All right reserved</p>

    </div>
  )
}

export default Footer