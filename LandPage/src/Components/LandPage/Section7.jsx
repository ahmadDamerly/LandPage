import './Section7.css'
import React from 'react'
import Right from './Assets/Right.svg'
import im1 from './Assets/im1.svg'
import im2 from './Assets/im2.svg'
import im3 from './Assets/im3.svg'


export const Section7 = () => {
  return (
    <div className='container section7'>
        <h3>Caring is the new marketing</h3>
        <div className='top-p'>
        <p >The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className='sec7-tot'>

            <div className='sec7-el'>

                <div className='sec7-img'>
                    <img src={im1}alt="" />
                </div>
                <div className='sec7-disc'>
                    <p className='frame-p'>Creating Streamlined Safeguarding Processes with OneRen</p>
                    <p className='btn-p'>Readmore <img src={Right} alt="" /></p>
                </div>
            </div>
            <div className='sec7-el'>
                <div className='sec7-img'>
                    <img src={im2} alt="" />
                </div>
                <div className='sec7-disc'>
                    <p className='frame-p'>What are your safeguarding responsibilities and how can you manage them?</p>
                    <p className='btn-p'>Readmore <img src={Right} alt="" /></p>
                </div>
            </div>
            <div className='sec7-el'>
                <div className='sec7-img'>
                    <img src={im3} alt="" />
                </div>
                <div className='sec7-disc'>
                    <p className='frame-p'>Revamping the Membership Model with the Triathlon of  Australia</p>
                    <p className='btn-p'>Readmore <img src={Right} alt="" /></p>
                </div>
            </div>
        </div>
    </div>
  )
}
