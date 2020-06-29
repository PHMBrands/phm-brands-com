import React from 'react';
import NavBar from '../NavBar/NavBar';
import Splash from '../Splash/Splash';
// import TripSelector from '../TripSelector/TripSelector';
// import FeaturedTrips from '../FeaturedTrips/FeaturedTrips';
// import RegionalTrips from '../RegionalTrips/RegionalTrips';
// import AboutMain from '../AboutMain/AboutMain';
// import VideoMain from '../VideoMain/VideoMain';
// import NewsletterSignUp from '../NewsletterSignUp/NewsletterSignUp';
import Accolades from '../Accolades/Accolades';
// import Footer from '../Footer/Footer';
// import StickyFooter from '../StickyFooter/StickyFooter';
import OurCompanies from '../OurCompanies/OurCompanies';
import OurBrands from '../OurBrands/OurBrands';
import SkinnyFooter from '../SkinnyFooter/SkinnyFooter';
import ContactUs from '../ContactUs/ContactUs';
import OurTeam from '../OurTeam/OurTeam';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Splash />
      <Accolades />
      <OurCompanies />
      <OurBrands />
      {/* <TripSelector /> */}
      {/* <FeaturedTrips /> */}
      {/* <RegionalTrips /> */}
      {/* <AboutMain /> */}
      {/* <StickyFooter /> */}
      {/* <VideoMain /> */}
      {/* <NewsletterSignUp /> */}
      <OurTeam />
      <ContactUs />
      <SkinnyFooter />
      {/* <Footer /> */}

    </div>
  )
}

export default App;
