import React from 'react';
import peopleIcon from '../../utils/images/our-people.png';
import qualityIcon from '../../utils/images/our-quality.png';
import customerIcon from '../../utils/images/our-customer.png';
import taglineImage from '../../utils/images/sample-wheat-field.jpg';

const Accolades = () => {
  
  return (
    <section className="accolades" id="about">
      <p className="section-header">About Us</p>
      <section className="accolades-info">
        <article className="individual-accolade">
          <img src={peopleIcon} />
          <h4>Our People</h4>
          <p className="tenet-text">Our team is driven for results and executes humbly, passionately, and with a determination to win. We take pride and responsibility for our performance in all of our decisions and actions.</p>
        </article>  
        <article className="individual-accolade">
          <img src={qualityIcon} />
          <h4>Our Quality</h4>
          <p className="tenet-text">Our team is focused on making safe food and food safe. We develop a clear understanding of our customer’s requirements, own our responsibilities and accountabilities, and deliver safe and consistent product that can be trusted by all. Our continuous drive for improvement in our processes supports our commitment to quality and safety in everything that we do.</p>
        </article>  
        <article className="individual-accolade">
          <img src={customerIcon} />
          <h4>Our Customer</h4>
          <p className="tenet-text">Our team is focused on delivering for our customers through partnerships and meeting our promises. We listen, challenge, and focus our efforts on providing solutions that meet the changing needs of the industries we serve.</p>
        </article>
      </section>
      <div className="tagline-container">
        {/* <p id="tagline"><em>Making safe food and food safe.</em></p> */}
        <img src={taglineImage} id="accolades-splash" alt="field of grains" />
      </div>
    </section>
  )
}

export default Accolades;