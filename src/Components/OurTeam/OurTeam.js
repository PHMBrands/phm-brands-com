import React from 'react';
import headshot from '../../utils/images/phm-brands-logo.png';
// import headshot from '../../utils/images/target.png';
import Bryan from '../../utils/images/bryan-ledgerwood.jpg';
import John from '../../utils/images/john-mason.jpg';
import Don from '../../utils/images/don-pearson.jpg';
import Jason from '../../utils/images/jason-stoddart.jpg';
import Jennifer from '../../utils/images/jennifer-harnish.jpg';
import Scott from '../../utils/images/scott-freebern.jpg';

const OurTeam = () => {

  return (
    <section className="our-team">
      <p className="section-header">Our Senior Leadership Team</p>
      <div className="our-team-section">
        <article className="team-member">
          <img src={John} className="team-member-image" />
          <p className="member-name">John Mason</p>
          <p>Partner</p>
        </article>
        <article className="team-member">
          <img src={Bryan} className="team-member-image" />
          <p className="member-name">Bryan Ledgerwood</p>
          <p>Partner</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p className="member-name">Peter Bisaccia</p>
          <p>President, Panhandle Milling</p>
        </article>
        <article className="team-member">
          <img src={Don} className="team-member-image" />
          <p className="member-name">Don Pearson</p>
          <p>President, Viobin / VP Commercial</p>
        </article>
        <article className="team-member">
          <img src={Jennifer} className="team-member-image" />
          <p className="member-name">Jennifer Harnish</p>
          <p>GM, Guardian / VP Business Operations</p>
        </article>
        <article className="team-member">
          <img src={Jason} className="team-member-image" />
          <p className="member-name">Jason Stoddart</p>
          <p>VP HR & Facilities</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p className="member-name">Neil Hartzell</p>
          <p>VP Supply Chain & Logistics</p>
        </article>
        <article className="team-member">
          <img src={Scott} className="team-member-image" />
          <p className="member-name">Scott Freebern</p>
          <p>VP Technical Milling & Engineering</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p className="member-name">Scott Freebern</p>
          <p>VP Technical Milling & Engineering</p>
        </article>
        <article className="team-member">
          <img src={headshot} className="team-member-image" />
          <p className="member-name">Scott Freebern</p>
          <p>VP Technical Milling & Engineering</p>
        </article>
      </div>
    </section>
  )
}

export default OurTeam;