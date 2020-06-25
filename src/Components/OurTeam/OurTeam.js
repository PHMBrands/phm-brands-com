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
          <p>John Mason</p>
          <p>Partner</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Bryan Ledgerwood</p>
          <p>Partner</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Peter Bisaccia</p>
          <p>President</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Don Pearson</p>
          <p>Partner Commercial Strategy & Execution</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Jennifer Harnish</p>
          <p>VP Business Operations</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Jason Stoddart</p>
          <p>VP HR & Facilities</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Neil Hartzell</p>
          <p>VP Supply Chain & Logistics</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p>Scott Freebern</p>
          <p>VP Technical Milling & Engineering</p>
        </article>
      </div>
    </section>
  )
}

export default OurTeam;