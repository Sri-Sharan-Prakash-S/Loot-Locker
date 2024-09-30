import React from 'react'
import loot from '../../../Frontend/src/assets/gaming-pad.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="d-flex gap-3 footer-content-left">
                <div>
                <img src={loot} alt="" style={{width:'40px'}} />
                </div>
                <div>
                <p className='fs-5'>Loot Locker</p>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@lootlocker.com</li>
                </ul>
            </div>
            <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Resources</li>
                        <li>Privacy Policy</li>
                    </ul>
            </div>
        </div>
        <p className="footer-copyright">Copyright 2024 @ Lootlocker.com -All Rights Resevered.</p>
    </div>
  )
}

export default Footer