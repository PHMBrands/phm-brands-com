import React from 'react';
import headshot from '../../utils/images/target.png';
import wwfIcon from '../../utils/images/logo-wwf.png';

const OurTeam = () => {

  return (
    <section className="our-team">
      <h5>Our Senior Leadership Team</h5>
      <div className="our-team-section">
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>John Mason, CEO</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Bryan Ledgerwood, COO</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Peter Bisaccia, President Panhandle Milling, LLC</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Don Pearson, Partner Commercial Strategy & Execution</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Jennifer Harnish, VP Business Operations</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Jason Stoddart, VP HR & Facilities </p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Neil Hartzell, VP Supply Chain & Logistics</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Scott Freebern, VP Technical Milling & Engineering</p>
        </article>
      </div>
    </section>
  )
}

export default OurTeam;