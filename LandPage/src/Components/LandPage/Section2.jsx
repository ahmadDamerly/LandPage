import './Section2.css'
import React from 'react'
import Icon1 from './Assets/Icon1.svg'
import Icon2 from './Assets/Icon2.svg'
import Icon3 from './Assets/Icon3.svg'

export const Section2 = () => {
  return (
    <div className='section2 container'>
        <h1>Manage your entire community</h1>
        <h1>in a single system</h1>
        <p>Who is Nextcent suitable for ?</p>
        <div className='suitablecontainer'>
            <div className='suitable'>
                <div className='img-cont'>
                    <div className='final-img'>
                         <img src={Icon1} alt="" />
                         <span></span>
                     </div>
                </div>
                <h3>Membership</h3>
                <h3>Organizations</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='suitable'>
            <div className='img-cont'>
                    <div className='final-img'>
                         <img src={Icon2} alt="" />
                         <span></span>
                     </div>
                </div>
                <h3>Nationals</h3>
                <h3>Assosiations</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className='suitable'>
            <div className='img-cont'>
                    <div className='final-img'>
                         <img src={Icon3} alt="" />
                         <span></span>
                     </div>
                </div>
                <h3>Clubs And</h3>
                <h3>Groups</h3>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
    </div>
  )
}
