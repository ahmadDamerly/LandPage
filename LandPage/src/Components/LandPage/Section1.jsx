import './Section1.css'
import React from 'react'
import Logo1 from './Assets/Logo1.svg'
import Logo2 from './Assets/Logo2.svg'
import Logo3 from './Assets/Logo3.svg'
import Logo4 from './Assets/Lgo4.svg'
import Logo5 from './Assets/Logo5.svg'
import Logo6 from './Assets/Logo6.svg'
import Logo7 from './Assets/Logo7.svg'

export const Section1 = () => {
  return (
    <div className='container section1'>
        <h1>Our Clients</h1>
        <p>we have been working with some fortune 500+clients</p>
        <ul>
            <li> <img src={Logo1} alt="" /></li>
            <li> <img src={Logo2} alt="" /></li>
            <li> <img src={Logo3} alt="" /></li>
            <li> <img src={Logo4} alt="" /></li>
            <li> <img src={Logo5} alt="" /></li>
            <li> <img src={Logo6} alt="" /></li>
            <li> <img src={Logo7} alt="" /></li>
        </ul>
    </div>
  )
}
