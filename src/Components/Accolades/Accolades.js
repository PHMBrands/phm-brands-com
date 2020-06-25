import React from 'react';
import peopleIcon from '../../utils/images/our-people.png';
import qualityIcon from '../../utils/images/our-quality.png';
import customerIcon from '../../utils/images/our-customer.png';
import taglineImage from '../../utils/images/sample-wheat-field.jpg';

const Accolades = () => {
  
  return (
    <section className="accolades">
      <h4>About Us</h4>
      <section className="accolades-info">
        <article className="individual-accolade">
          <img src={peopleIcon} />
          <h4>Our People</h4>
          <p>Our employees are number one! We truly care about our employees and their families. Providing an atmosphere of innovation and ensuring the safety of our people is vital to our success. The sum of all our hard working employees makes up the company we love, PHM Brands.</p>
        </article>  
        <article className="individual-accolade">
          <img src={qualityIcon} />
          <h4>Our Quality</h4>
          <p>"Quality" is not just a buzz word for us! We invest heavily in equipment, training, and certifications to assure that our products are next to none. With experienced engineers and a Quality Assurance lab, onsite our products are checked, checked and checked again to make sure that the ingredients you receive will provide you with top notch finished products.</p>
        </article>  
        <article className="individual-accolade">
          <img src={customerIcon} />
          <h4>Our Customer</h4>
          <p>Some people simply want a quick sale. Those people are not Panhandle Milling. The relationships we have with each and every customer matters. We believe actions matter more than words when it comes to showing our customers that we care. Our agility allows us to meet our customers' needs.</p>
        </article>
      </section>
      <div className="tagline-container">
        <p id="tagline">Making safe food, and food safe</p>
        <img src={taglineImage} id="accolades-splash" alt="field of grains" />
      </div>
    </section>
  )
}

export default Accolades;