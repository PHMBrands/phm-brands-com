import React from 'react';
import outsideLogo from '../../utils/images/product.png';
import outsideBadge from '../../utils/images/social-care.png';
import natGeo from '../../utils/images/quality.png';
import accoladesSplash from '../../utils/images/sample-wheat-field.jpg';

const OurCompanies = () => {
  
  return (
    <section className="accolades">
      <h4>Our Companies</h4>
      <section className="accolades-info">
        <article className="individual-accolade">
          <img src={outsideLogo} alt="outside-magazine-logo" />
          {/* <h4>Our People</h4> */}
          {/* <p>Voted <span className="bold-accolade">"World's Best Travel Company" </span>by Outside Magazine</p> */}
        </article>  
        <article className="individual-accolade">
          <img src={outsideBadge} id="outside-badge" alt="outside-magazine-badge" />
          {/* <h4>Our Products</h4> */}
          {/* <p>Natural Habitate Adventures Ranked <span className="bold-accolade">"Best Outfitter"</span></p> */}
        </article>  
        <article className="individual-accolade">
          <img src={natGeo} alt="national-geographic-traveler-logo" />
          {/* <h4>Our Customers</h4> */}
          {/* <p>Voted <span className="bold-accolade">"Best Winter Trip" </span>Natural Habitat Adventures' Monarch Butterfly Migration, Mexico</p> */}
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