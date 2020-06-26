import React from 'react';

const ContactUs = () => {

  return <section className="contact-us">
      <p className="section-header">Contact Us</p>
      <section className="contact-options">
        <section className="contact-info">
          <h5>Contact Info</h5>
          <p>Questions, comments, inquiries? Send us a message and a team member will be in touch with you shortly. </p>
          <p>Phone: 303-219-9142</p>
          <p>Email: ContactUs@PHMbrands.com</p>
        </section> 
        <section className="contact-form">
          <h5>Contact Form</h5>
          <form>
            <label for="name-input">Name:</label>
            <input 
              id="name-input"
              className="form-name-and-email"
              type="text"
            /> 
            <label for="email-input">Email Address:</label>
            <input 
              id="email-input"
              className="form-name-and-email"
              type="text"
            />
            <label for="form-comment">Message:</label>
            <textarea 
              id="form-comment" 
              className="form-message" 
              rows="4" 
              cols="50"
            />  
            {/* <input className="form-message"
              type="textarea"
            />  */}
            <button>SUBMIT</button>
          </form>
        </section>
      </section>
    </section>
}

export default ContactUs;