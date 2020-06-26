import React from 'react';
import brandSample from '../../utils/images/brand-sample.png';
// import outsideBadge from '../../utils/images/social-care.png';
// import natGeo from '../../utils/images/quality.png';
// import accoladesSplash from '../../utils/images/sample-wheat-field.jpg';

const OurBrands = () => {
  
  return (
    <section className="our-brands">
      <p className="section-header">Our Brands</p>
      <section className="our-brands-details">
        <article>
          <img src={brandSample} className="brand-logo"  />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>  
        <article>
          <img src={brandSample} className="brand-logo" />
          {/* <h6>Viobin</h6> */}
          {/* <p>Natural Habitate Adventures Ranked <span className="bold-accolade">"Best Outfitter"</span></p> */}
        </article>  
        <article>
          <img src={brandSample} className="brand-logo"  />
          {/* <h4>Our Customers</h4> */}
          {/* <p>Voted <span className="bold-accolade">"Best Winter Trip" </span>Natural Habitat Adventures' Monarch Butterfly Migration, Mexico</p> */}
        </article>
        <article>
          <img src={brandSample} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article>
          <img src={brandSample} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article>
          <img src={brandSample} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article>
          <img src={brandSample} className="brand-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>
        <article>
          <img src={brandSample} className="brand-logo" />
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