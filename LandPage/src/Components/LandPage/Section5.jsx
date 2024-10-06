import './Section5.css'
import React from 'react'
import Pana from './Assets/pana.svg'

export const Section5 = () => {
  return (
  <div className='container section5' >
    <div className='row sec5-img' >
    <div className='  col-12 col-sm-5 '>
        <img style={{width :'100%'}} src={Pana} alt="" />
    </div>
    <div className='col-12 col-sm-7 '>
        <h2>How to design your site footer like <br></br> we did</h2>
        <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
        <button>Learn More</button>
    </div>
  </div>
  </div>
  )
}
