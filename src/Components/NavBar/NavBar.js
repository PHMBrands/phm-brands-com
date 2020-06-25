import React from 'react';
// import natHabIcon from '../../utils/images/logo-nha.png';
import wwfIcon from '../../utils/images/logo-wwf.png';
import PHMlogo from '../../utils/images/phm-brands-logo.png';


const NavBar = () => {

  return (
    <header>
      <div className="nav-bar-icons">
        <img src={PHMlogo} className="phm-logo" alt="Natural Habitat Adventures icon" />
        {/* <img src={wwfIcon} className="wwf-logo" alt="WWF icon" /> */}
      </div>
      <div className="nav-bar-links">
        <h5>About Us</h5>
        <h5>Our Companies</h5>
        <h5>Our Products</h5>
        <h5>Our Team</h5>
        <h5>Contact Us</h5>
        {/* <h5>CONTACT US</h5> */}
        {/* <h5>eNEWS SIGNUP</h5> */}
        {/* <button className="catalog-link">GET THE CATALOG</button> */}
      </div>
    </header>
  )
}

export default NavBar;