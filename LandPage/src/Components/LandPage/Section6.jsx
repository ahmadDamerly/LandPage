import './Section6.css'
import React from 'react'
import Tim from './Assets/Tim.svg'
import Logo1 from './Assets/Logo1.svg'
import Logo2 from './Assets/Logo2.svg'
import Logo3 from './Assets/Logo3.svg'
import Logo4 from './Assets/Lgo4.svg'
import Logo5 from './Assets/Logo5.svg'
import Logo6 from './Assets/Logo6.svg'
import Right from './Assets/Right.svg'

export const Section6 = () => {
  return (
   <div className='sec6-bg'>
   <div className=' section6 container '>
        <div className='row sec6-grand '>
            <div></div>
            <div className='col-12 col-sm-4 col-md-4'>
                <div className='tim'>
                    <img src={Tim} alt="" />
                </div>
            </div>
            <div className='col-12 col-sm-8 col-md-8'>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h6 className='writer'>Tim Smith</h6>
                <h6 className='desc'>British Dragon Boat Racing Association</h6>
                <ul>
                    <li><img src={Logo1} alt="" /></li>
                    <li><img src={Logo2} alt="" /></li>
                    <li><img src={Logo3} alt="" /></li>
                    <li><img src={Logo4} alt="" /></li>
                    <li><img src={Logo5} alt="" /></li>
                    <li><img src={Logo6} alt="" /></li>  <span >Meet all customers</span>
                    <img src={Right} alt="" />
                </ul>

            </div>
        </div>

    </div>
    </div>
  )
}
