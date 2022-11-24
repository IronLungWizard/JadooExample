import React from 'react'
import './MobileMenu.scss'
import NavBurger from '../../../src/images/NavBurger.svg'


const MobileMenu = () => {
  return (
<div >
  <div className="menuWrapper"></div>
    <div className="mobileMenu">     
            <img className="navBurger" src={NavBurger} alt=""/>
            <input className="dropDownCheckbox" type="checkbox"></input>
        <div className="mobileMenu-content">
          <ul className="mobileMenu-innerWrapper">
            <li href="#">Destination</li>
            <li href="#">Hotels</li>
            <li href="#">Flights</li>
            <li href="#">Bookings</li>
          </ul>
        </div>        
    </div>
  </div>
  )
}

export default MobileMenu