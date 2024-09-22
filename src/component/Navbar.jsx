

const NAVBAR = () => {
  return (
    <div className="navbar bg-gradient-to-r from-white via-blue-50 to-blue-100 text-white p-3 w-screen">
      <div className="container mx-auto bg-gradient-to-r from-white via-blue-50 to-blue-100 flex justify-between items-center px-2">
        
        <div className="logo">
          <img src="logo.png" alt="Logo" className="w-24" />
        </div>

        <div className="nav-options text-black font-medium rounded-lg flex m-1 px-4 py-3 items-center space-x-4 sm:space-x-6 lg:space-x-12">
          <a className="options text-blue-400 font-bold px-2 sm:px-4 py-2" href="LANDINGPAGE">Home</a>
          <a className="options" href="#">How it Works</a>
          <a className="options" href="#">Meet Experts</a>
          <a className="options" href="#">Join as Experts</a>
          <button className="bg-black text-white px-2 sm:px-4 py-2 rounded" type="button">Get Started</button>
        </div>

      </div>
    </div>
  );
};

export default NAVBAR;
