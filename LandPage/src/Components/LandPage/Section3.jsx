import './Section3.css'
import React from 'react'
import Frame from './Assets/Frame.svg'

export const Section3 = () => {
  return (
    <div className='container section3'>
        <div className='row sec-img'>
        <div className='col-0 col-sm-1'></div>
        <div className=' col-12 col-sm-4 col-md-4'> 
        
            <div>
            <img src={Frame}  alt="" />
            </div>
        </div>
        <div className='col-0 col-sm-1'></div>
        <div className=' sec3-text col-12 col-sm-5 col-md-5'>
            
            <h3>The unseen of spending three <br></br>years at Pixelgrade</h3>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button>Learn More</button>
            
        </div>
        <div className='col-0 col-sm-1'></div>
        </div>
    </div>
  )
}
