
const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 m-1 w-80">
      {/* Upper part - Icon and text */}
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50" 
            alt="Logo"
            className="rounded-full w-12 h-12"
          />
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-1 rounded-lg">
            Chat
          </button>
        </div>
      </div>

      {/* Card content */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Kartik Khorwal</h2>
        <p className="text-gray-600">@kartikk</p>
        <p className="mt-2 text-gray-500">
          Building Websites and Webapps with Seamless User Experience Across
          Devices.
        </p>
      </div>

      {/* Footer with stats */}
      <div className="mt-4 flex justify-between text-gray-600">
        <div>
          <span className="font-bold">238</span> Following
        </div>
        <div>
          <span className="font-bold">84</span> Followers
        </div>
      </div>

      {/* Links */}
      <div className="mt-4 flex items-center text-blue-500">
        <i className="fa fa-link mr-2"></i>
        <a href="https://kartikkhorwal.com" className="text-sm">
          kartikkhorwal.com
        </a>
      </div>
      <div className="flex items-center mt-2 text-gray-500">
        <i className="fa fa-map-marker mr-2"></i>India
      </div>
    </div>
  );
};

export default Card;
