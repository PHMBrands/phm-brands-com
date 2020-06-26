import React from 'react';
import electroBrand from '../../utils/images/electro-brand-logo.jpg';
import guardianBrand from '../../utils/images/guardian-brand-logo.png';
import brandSample from '../../utils/images/navajo-brand-logo.png';
import organicGrainsBrand from '../../utils/images/organic-grains-brand-logo.png';
import panhandleBrand from '../../utils/images/panhandle-milling-brand-logo.png';
import rexBrand from '../../utils/images/rex-brand-logo.png';
import texasPureBrand from '../../utils/images/texas-pure-milling-brand-logo.png';
import viobinBrand from '../../utils/images/viobin-logo.png';
import viobinCBDBrand from '../../utils/images/viobincbd-brand-logo.png';
// import brandSample from '../../utils/images/brand-logo.png';
// import brandSample from '../../utils/images/brand-logo.png';


// import outsideBadge from '../../utils/images/social-care.png';
// import natGeo from '../../utils/images/quality.png';
// import accoladesSplash from '../../utils/images/sample-wheat-field.jpg';

const OurBrands = () => {
  
  return (
    <section className="our-brands" id="brands">
      <p className="section-header">Our Brands</p>
      <section className="our-brands-details">
        <article className="one-brand">
          <img src={electroBrand} className="brand-logo" id="needs-bigger-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>  
        <article className="one-brand">
          <img src={guardianBrand} className="brand-logo" />
          {/* <h6>Viobin</h6> */}
          {/* <p>Natural Habitate Adventures Ranked <span className="bold-accolade">"Best Outfitter"</span></p> */}
        </article>  
        <article className="one-brand">
          <img src={organicGrainsBrand} className="brand-logo"  />
          {/* <h4>Our Customers</h4> */}
          {/* <p>Voted <span className="bold-accolade">"Best Winter Trip" </span>Natural Habitat Adventures' Monarch Butterfly Migration, Mexico</p> */}
        </article>
        <article className="one-brand">
          <img src={panhandleBrand} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article className="one-brand">
          <img src={rexBrand} className="brand-logo" id="needs-bigger-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article className="one-brand">
          <img src={texasPureBrand} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article className="one-brand">
          <img src={viobinBrand} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article className="one-brand">
          <img src={viobinCBDBrand} className="brand-logo" id="needs-bigger-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
      </section>
      {/* <div className="tagline-container">
        <p id="tagline">Making safe food, and food safe</p>
        <img src={accoladesSplash} id="accolades-splash" alt="field of grains" />
      </div> */}
    </section>
  )
}

export default OurBrands;