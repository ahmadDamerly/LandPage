import './LandNav.css'
import React from 'react'
import logo from './Assets/Logo.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import Right from './Assets/Right.svg'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Container from 'react-bootstrap/Container';



export const LandNav = () => {
  return (
    // <div className='nav-bg'>
    <div className='landnav container'>
      <div className='logo'  >
        <img src={logo} alt="" />
      </div>
      <div className='navlinks'>
        <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>

        </ul>

      </div>
      <div className='navsign'>
        <button className='navlogin'>Login</button>
        <button className='navsignup'>Signup</button>
        
        <DropdownButton className='custom' variant='' title='' size=''>


 
   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>

 </DropdownButton>




      </div>

    </div>



    // </div>

  );
}

