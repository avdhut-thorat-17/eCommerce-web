import React, { useState } from 'react'; // Import useState from react
import './App.css';
import Navbar from './components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import HeroSection from './components/Herosection';

function App() {
  const [showOverlayMenu, setShowOverlayMenu] = useState(false);

  return (
    <div className="App">
      <Navbar setShowOverlayMenu={setShowOverlayMenu} />
      <HeroSection showOverlayMenu={showOverlayMenu} />
    </div>
  );
}

export default App;
