import './LandCarousel.css'
import React from 'react'








import Carousel from 'react-bootstrap/Carousel'; 
import illustration from './Assets/Illustration .png'




function LandCarousel() {
    return (
      // <div className='carou-bg'>
      <div className="container  carouselmain">
      <Carousel controls={false}   data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={illustration}
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={illustration}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={illustration}
            alt="Third slide"
          />

        </Carousel.Item>
      </Carousel>
      <div className='carouseltext'>
        <h1>Lessons and insights</h1>
         <span>from 8 years </span>
        <p>where to grow your business as a photogragher: site or social media</p>
        <button>Register</button>
      </div>
      </div>
      // </div>
    );
  }
  
  export default LandCarousel;