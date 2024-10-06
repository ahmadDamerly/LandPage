import './Section8.css'
import React from 'react'
import vector from './Assets/Vector.svg'

export const Section8 = () => {
  return (
    <div className='section8'>
        <h3>Pellentesque suscipit </h3>
        <h3>fringilla libero eu.</h3>
        <div className='sec8-btn'>
        <button>Get a Demo <img src={vector} alt="" /></button>
        </div>
    </div>
  )
}
