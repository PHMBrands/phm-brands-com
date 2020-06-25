import React from 'react';
import PanhandleLogo from '../../utils/images/panhandle-logo.png';
import ViobinLogo from '../../utils/images/viobin-logo.png';
import GuardianLogo from '../../utils/images/guardian-logo.png';
// import accoladesSplash from '../../utils/images/sample-wheat-field.jpg';

const OurCompanies = () => {
  
  return (
    <section className="accolades">
      <h4>Our Companies</h4>
      <section className="accolades-info">
        <article className="company-info">
          <img src={PanhandleLogo} className="company-logo" />
          {/* <h4>Our People</h4> */}
          <p>Specializing in grain-based products for bulk, retail, mid-sized customers, and e-commerce.</p>
        </article>  
        <article className="company-info">
          <img src={ViobinLogo} className="company-logo" />
          {/* <h4>Our Products</h4> */}
          <p>Specializing in oil extraction and supplements with a special emphasis on Wheat Germ Oil and CBD for both human and animal markets.</p>
        </article>  
        <article className="company-info">
          <img src={GuardianLogo} className="company-logo" />
          {/* <h4>Our Customers</h4> */}
          <p>Specializing in sanitization products and processes that are designed to keep your food safe. </p>
        </article>
      </section>
      {/* <div className="tagline-container">
        <p id="tagline">Making safe food, and food safe</p>
        <img src={accoladesSplash} id="accolades-splash" alt="field of grains" />
      </div> */}
    </section>
  )
}

export default OurCompanies;