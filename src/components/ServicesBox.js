import React from 'react'

export const ServicesBox = ({Image, Title, Paragraph}) => {
  return (
    
        <div className="box">
        <div className="img-text">
            <img src={Image} alt="Service-icon" />
            <h6>{Title}</h6>
        </div>
        <p>{Paragraph}</p>
        </div>
    
  )
}
