import React from 'react'

import IndUsa from '../assets/images/india-usa.png';

const IndiaUsa = () => {
  return (
    <div className='india-usa-wrp'>
        <div className='image-div'>
        <img src={IndUsa} alt=''/>
        </div>
        <div className='details-div'>
            <h6>We are prominent Chartered Accountant firm in India. We offer services in India, USA, </h6>
            <h6>UK and other European Countries like -</h6>
            <ul>
                <li>Starting Business in India</li>
                <li>Company Registrations (Private Ltd, LLP, Public Ltd, Firms)</li>
                <li>Taxation for Expatriates</li>
                <li>Foreign Company Incorporation in India</li>
                <li>Accounts & Bookkeeping Outsourcing Services in India</li>
                <li>GST Consultant in India</li>
                <li>Expert CPA Firm in Delhi, India</li>
                <li>Tax Planning and Tax Consultant in India</li>
                <li>Company Incorporation in India</li>
                <li>Business Registration in India</li>
            </ul>
        </div>
    </div>
  )
}

export default IndiaUsa