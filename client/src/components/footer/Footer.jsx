import React from 'react'
import Logo from '../../assets/logo.png'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="sectionContainer container grid">
        <div className="gridOne">
          <div className='footerLinks'>
            <span className='linkTitle'>Information</span>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Explore</a>
            </li>
            <li>
              <a href='#'>Flight Status</a>
            </li>
            <li>
              <a href='#'>Manage Your Booking</a>
            </li>
          </div>
          <div className='footerLinks'>
            <span className='linkTitle'>Guide</span>
            <li>
              <a href='#'>FAQ</a>
            </li>
            <li>
              <a href='#'>How To Guide</a>
            </li>
            <li>
              <a href='#'>Baggage Claims</a>
            </li>
            <li>
              <a href='#'>Our Communities</a>
            </li>
          </div>
          <div className='footerLinks'>
            <span className='linkTitle'>Information</span>
            <li>
              <a href='#'>Chauffeur</a>
            </li>
            <li>
              <a href='#'>Destinations</a>
            </li>
            <li>
              <a href='#'>Our Partners</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
          </div>
        </div>  
      </div>
      <div className="logoDiv">
        <img className='Logo' src={Logo} alt="Ticket stacker logo" />
      </div>
      <div className='tmDiv'>
        <p>Ticket Stacker is designed by <a href='https://emailto-aidan.krbec5@gmail.com'>Aidan Krbec</a></p>
        <div className="githubIcon flex">
          <a href='https://github.com/krbex' target='_blank'>
            <AiFillGithub className='icon'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer