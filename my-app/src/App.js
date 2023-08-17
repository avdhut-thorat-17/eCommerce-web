import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // Import BrowserRouter, Switch, and Route
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/Herosection';
import Feature from './components/Feature';
import CallToAction from './components/CallToAction';
import ExploreRooms from './components/ExploreRooms';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';
import PricingPage from './components/Pricing'; // Import the PricingPage component
import Footer from './components/Footer';

function App() {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  return (
    // <Router> {/* Wrap your content with the Router component */}
      <div className="App">
        <Navbar setShowOverlayMenu={setShowOverlayMenu} />
        <HeroSection showOverlayMenu={showOverlayMenu} />
        {/* <Switch> Use the Switch component to render only one matching Route */}
          {/* <Route path="/pricing" component={PricingPage} /> */}
          {/* <Route path="/" exact> */}
            <Feature />
            <CallToAction />
            <ExploreRooms />
            <Portfolio />
            <AboutUs />
          {/* </Route> */}
        {/* </Switch> */}
        <Footer />
      </div>
    // </Router>
  );
}

export default App;
