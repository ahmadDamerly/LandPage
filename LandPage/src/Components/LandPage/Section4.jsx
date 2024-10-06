import './Section4.css'
import React from 'react'
import Ico1 from './Assets/Ico1.svg'
import Ico2 from './Assets/Ico2.svg'
import Ico3 from './Assets/Ico3.svg'
import Ico4 from './Assets/Ico4.svg'

export const Section4 = () => {
  return (
    <div className='sec4-bg'>
    <div className='container sec4 '>
        <div className='row'>
        <div className=' sec4-left col-12 col-sm-12 col-lg-6 '>
            <h3>Helping a local </h3>
            <span>business reinvent itself</span>
            <p>We reached here with our hard work and dedication</p>
        </div>



        <div className='sec4-center col-12 col-sm-6 col-lg-3 '>
            <div className='sec4-tot'>
                <div className='sec4-img'>
                    <img src={Ico1} alt="" />
                </div>
                <div className='sec4-p'>
                    <p className='num'>2,245,341</p>
                    <p className='num-of'>Members</p>
                </div>
            </div>
            <div className='sec4-tot'>
                <div className='sec4-img'>
                    <img src={Ico3} alt="" />
                </div>
                <div className='sec4-p'>
                    <p className='num'>828,867</p>
                    <p className='num-of'>Event Bookings</p>
                </div>

            </div>
            </div>
            <div className='sec4-right col-12 col-sm-6 col-lg-3 '>
            <div className='sec4-tot'>
                <div className='sec4-img'>
                    <img src={Ico2} alt="" />
                </div>
                <div className='sec4-p'>
                    <p className='num'> 46,328</p>
                    <p className='num-of'>Clubs</p>
                </div>
            </div>
 
            <div className='sec4-tot'>
                <div className='sec4-img'>
                    <img src={Ico4} alt="" />
                </div>
                <div className='sec4-p'>
                    <p className='num'>1,926,436</p>
                    <p className='num-of'>Payments</p>
                </div>
            </div>
            </div> 

       
       
       
       
       
       
       
       
        </div>
    </div>
    </div>
  )
}
