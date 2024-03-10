import React from 'react'

import HeroImg from '../assets/images/About_Us.png'

const Hero = () => {
  return (
    <div className='hero-sec'>
        <img src={HeroImg} alt=''/>
        <button type='btn' className='get-app-btn'>
            Get Appointment
        </button>
    </div>
  )
}

export default Hero