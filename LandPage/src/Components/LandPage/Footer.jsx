import './Footer.css'
import React from 'react'
import logofooter from './Assets/logofooter.svg'
import Insta from './Assets/Insta.png'
import Insta1 from './Assets/Insta1.png'
import Twitter from './Assets/Twitter.png'
import Youtube from './Assets/Youtube.png'
import Send from './Assets/send.png'


export const Footer = () => {
  return (
    <div className='foot-bg'>
    <div className='footer container' >
      <div className='row'>
        
        <div className='foot-1 col-12 col-sm-6 col-lg-5' >
          <div className='image'>
          <img src={logofooter} alt="" />
          </div>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
          <ul>
            <li><img src={Insta} alt="" /></li>
            <li><img src={Insta1} alt="" /></li>
            <li><img src={Twitter} alt="" /></li>
            <li><img src={Youtube} alt="" /></li>
          </ul>
        </div>
        
        <div className='foot-2 col-6 col-sm-3 col-lg-2'>
          <h6>Company</h6>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className='foot-3 col-6 col-sm-3 col-lg-2'>
            <h6>Support</h6>
            <ul>
              <li>Help Center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
              <li>Status</li>
            </ul>
        </div>
        
        <div className='foot-4  col-12 col-sm-12 col-lg-3'>
            <h6>Stay up to date</h6>
            <div className='foot4-in'>
              <input type="text" placeholder='   Your email address'/>
            
              <img src={Send} alt="" />
             
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
