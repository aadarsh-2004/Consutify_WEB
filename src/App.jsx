import { useState } from 'react';
import './App.css';
import NAVBAR from './component/NAVBAR.jsx';
import LandingPage from './pages/LandingPage';
import Feature_card from './component/Feature_card.jsx';
import LoginPopup from './component/LoginPopup.jsx';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  const handleGetStartedClick = () => {
    setIsPopupOpen(true); // Open the popup when "Get Started" is clicked
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  return (
    <>
      <Router>
        <NAVBAR onGetStartedClick={handleGetStartedClick} /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Feature_card" element={<Feature_card />} />
        </Routes>
        
        {/* Render LoginPopup only when `isPopupOpen` is true */}
        <LoginPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
      </Router>
    </>
  );
}

export default App;
