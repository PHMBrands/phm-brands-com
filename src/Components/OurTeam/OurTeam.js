import React from 'react';
import headshot from '../../utils/images/phm-brands-orange-logo.png';
// import headshot from '../../utils/images/target.png';
import Bryan from '../../utils/images/bryan-ledgerwood.jpg';
import John from '../../utils/images/john-mason.jpg';
import Don from '../../utils/images/don-pearson.jpg';
import Jason from '../../utils/images/jason-stoddart.jpg';
import Jennifer from '../../utils/images/jennifer-harnish.jpg';
import Scott from '../../utils/images/scott-freebern.jpg';
import Bill from '../../utils/images/bill-streeter.jpg';
import Darin from '../../utils/images/darin-jensen.jpg';
// import DarinTest from '../../utils/images/darin-jensen-test.jpg';


const OurTeam = () => {

  return (
    <section className="our-team" id="team">
      <p className="section-header">Our Senior Leadership Team</p>
      <div className="our-team-section">
        <article className="team-member">
          <img src={John} className="team-member-image" />
          <p className="member-name">John Mason</p>
          <p>CEO</p>
        </article>
        <article className="team-member">
          <img src={Bryan} className="team-member-image" />
          <p className="member-name">Bryan Ledgerwood</p>
          <p>CEO</p>
        </article>
        <article className="team-member">
          <div className="missing-member-div"><img src={headshot} className="missing-member-image" /></div>
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
          <div className="missing-member-div"><img src={headshot} className="missing-member-image" /></div>
          <p className="member-name">Neil Hartzell</p>
          <p>VP Supply Chain & Logistics</p>
        </article>
        <article className="team-member">
          <img src={Scott} className="team-member-image" />
          <p className="member-name">Scott Freebern</p>
          <p>VP Technical Milling & Engineering</p>
        </article>
        <article className="team-member">
          <img src={Bill} className="team-member-image" />
          <p className="member-name">Bill Streeter</p>
          <p>Chief Financial Officer</p>
        </article>
        <article className="team-member">
          <img src={Darin} className="team-member-image" />
          <p className="member-name">Darin Jensen</p>
          <p>VP Quality, Food Safety & Regulatory</p>
        </article>
      </div>
    </section>
  )
}

export default OurTeam;