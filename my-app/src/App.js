import React, { useState } from 'react'; // Import useState from react
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'; // Remove Switch import from here

import Navbar from './components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from './components/Herosection';
import Feature from './components/Feature';
import CallToAction from './components/CallToAction';
import ExploreRooms from './components/ExploreRooms';
import Pricing from './components/Pricing';
import PricingPage from './components/Pricing';
import AboutUs from './components/AboutUs';
import Portfolio from './components/Portfolio';

function App() {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar setShowOverlayMenu={setShowOverlayMenu} />
        <Switch>
          <Route path='/' exact>
            <HeroSection showOverlayMenu={showOverlayMenu} />
          </Route>
          <Route path='/Feature'>
            <Feature />
          </Route>
          <Route path='/CallToAction'>
            <CallToAction />
          </Route>
          <Route path='/ExploreRooms'>
            <ExploreRooms />
          </Route>
          <Route path='/Portfolio'>
            <Portfolio />
          </Route>
          <Route path='/Pricing'>
            <PricingPage />
          </Route>
          <Route path='/About Us'>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;