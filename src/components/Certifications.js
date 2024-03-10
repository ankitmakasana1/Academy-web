import React from 'react'

import ImageOne from "../assets/images/c-one.png"
import ImageTwo from "../assets/images/c-two.png"
import ImageThree from "../assets/images/c-three.png"
import ImageFour from "../assets/images/c-four.png"
import ImageFive from "../assets/images/c-five.png"

const Certifications = () => {
  return (
    <div className='certifications-div'>
        <div className='container'>
            <div className='text-logo'>
            <h6>Certifications & Associations</h6>
                <div className='logo-wrp'>
                    <img src={ImageOne} alt='certifications-img'/>
                    <img src={ImageTwo} alt='certifications-img'/>
                    <img src={ImageThree} alt='certifications-img'/>
                    <img src={ImageFour} alt='certifications-img'/>
                    <img src={ImageFive} alt='certifications-img'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Certifications