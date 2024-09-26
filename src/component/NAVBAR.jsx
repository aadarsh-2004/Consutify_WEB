import { Link, useLocation } from "react-router-dom";


const NAVBAR = ({ onGetStartedClick }) => { 
  const location = useLocation();

  return (
    <div className="navbar bg-gradient-to-r from-white via-blue-50 to-blue-100 text-white p-3 w-screen">
      <div className="container mx-auto bg-gradient-to-r from-white via-blue-50 to-blue-100 flex justify-between items-center px-2">
        
        <div className="logo">
          <img src="logo.png" alt="Logo" className="w-24" />
        </div>

        <div className="nav-options text-black font-medium rounded-lg flex m-1 px-4 py-3 items-center space-x-4 sm:space-x-6 lg:space-x-12">
          <Link 
            className={`options px-2 sm:px-4 py-2 ${location.pathname === '/' ? 'text-blue-400 font-bold' : ''}`} 
            to="/">
            Home
          </Link>

          <Link 
            className={`options px-2 sm:px-4 py-2 ${location.pathname === '/Feature_card' ? 'text-blue-400 font-bold' : ''}`} 
            to="/Feature_card">
            How it Works
          </Link>

          <Link 
            className="options px-2 sm:px-4 py-2" 
            to="#">
            Meet Experts
          </Link>

          <Link 
            className="options px-2 sm:px-4 py-2" 
            to="#">
            Join as Experts
          </Link>

          {/* Get Started Button */}
          <button 
            className="bg-black text-white px-2 sm:px-4 py-2 rounded" 
            type="button"
            onClick={onGetStartedClick} // Call the passed function when clicked
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default NAVBAR;
