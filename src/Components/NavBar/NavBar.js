import React from 'react';
// import natHabIcon from '../../utils/images/logo-nha.png';
import wwfIcon from '../../utils/images/logo-wwf.png';
import PHMlogo from '../../utils/images/phm-brands-logo.png';
import AnchorLink from 'react-anchor-link-smooth-scroll'


const NavBar = () => {

  return (
    <header>
      <div className="nav-bar-icons">
        <img src={PHMlogo} className="phm-logo" alt="Natural Habitat Adventures icon" />
        {/* <img src={wwfIcon} className="wwf-logo" alt="WWF icon" /> */}
      </div>
      <div className="nav-bar-links">
        <h5><AnchorLink offset='70' href='#about' id="smooth-scroll-button">About Us</AnchorLink></h5>
        <h5><AnchorLink offset='70' href='#businesses' id="smooth-scroll-button">Our Businesses</AnchorLink></h5>
        <h5><AnchorLink offset='120' href='#brands' id="smooth-scroll-button">Our Brands</AnchorLink></h5>
        <h5><AnchorLink offset='70' href='#team' id="smooth-scroll-button">Our Team</AnchorLink></h5>
        <h5><AnchorLink offset='60' href='#contact' id="smooth-scroll-button">Contact Us</AnchorLink></h5>
        {/* <h5>CONTACT US</h5> */}
        {/* <h5>eNEWS SIGNUP</h5> */}
        {/* <button className="catalog-link">GET THE CATALOG</button> */}
      </div>
    </header>
  )
}

export default NavBar;