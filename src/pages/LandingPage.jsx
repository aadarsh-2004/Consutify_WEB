import Expert_cards from "../component/Expert_cards";
import Testimonials from "../component/Testimonials";
import Feature_card from "../component/Feature_card";

const LANDINGPAGE = () => {
  return (
    <>
        <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 w-screen min-h-screen flex flex-col items-center  overflow-x-hidden">

            {/* SECTION 1: HOARDING */}
            <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 w-full flex justify-between p-12">

                {/* Left Section - Text */}
                <div className="TEXT_AREA flex flex-col max-w-lg h-full">
                    <h1 className="text-6xl font-bold mb-6">
                    Get <span className="text-blue-400">Expert</span> Advice in Minutes
                    </h1>
                    <p className="text-lg md:text-xl m-3 mt-5 mb-4">
                    Get quick, personalized advice from top professionals.
                    </p>
                    <p className="text-lg md:text-xl m-3 mt-3 mb-6">
                    Our <span className="text-blue-400">AI Assistant</span> helps you find the perfect expert. Your solution is just 10 minutes away.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white w-72 mt-5 m-3 py-3 px-3 rounded-lg text-2xl">
                    Chat Now
                    </button>
                </div>

                {/* Image */}
                <div className="IMAGE flex ">
                    <img
                    src="hoarding.jpg"
                    alt="Expert Video Call"
                    className="rounded-lg shadow-xl backdrop-blur-md shadow-blue-300 mr-8 h-40 w-56
                                                                                        sm:h-56 sm:w-64
                                                                                        md:h-72 md:w-72
                                                                                        lg:w-96 lg:h-96 "
                    
                    />
                </div>
            </div>

            {/* SECTION 2: FEATURES */}
            <div className="FEATURES flex flex-col mt-24">

                {/* Feature text */}
                <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 flex flex-col items-center mt-30">
                    <h1 className="w-fit text-4xl p-4 font-semibold text-blue-500">Features</h1>
                    <p className="w-fit text-5xl p-5 font-medium text-black">Our Features & Services</p>
                </div>

                {/* Feature Horizontal box */}
                <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 w-screen flex justify-center">
                    <div className="flex flex-wrap shadow-xl backdrop-blur-md shadow-blue-300 m-20 justify-center rounded-3xl">
                    <button className="btn bg-blue-500 text-white font-medium p-5 m-3 my-8 rounded-lg" type="submit"><i className="fa fa-user-md mr-2"></i>Talk to Expert</button>
                    <button className="btn bg-blue-500 text-white font-medium p-5 m-3 my-8 rounded-lg" type="submit"><i className="fa fa-comment-dots mr-2"></i>Chat with Expert</button>
                    <button className="btn bg-blue-500 text-white font-medium p-5 m-3 my-8 rounded-lg" type="submit"><i className="fa fa-handshake mr-2"></i>In-Person Meet</button>
                    <button className="btn bg-blue-500 text-white font-medium p-5 m-3 my-8 rounded-lg" type="submit"><i className="fa fa-video mr-2"></i>Video Chat</button>
                    </div>
                </div>

                {/* Feature box */}
                <Feature_card/>

            </div>

            {/* SECTION 3: OURR EXPERTS */}
            <div className="FEATURES flex flex-col mt-24 ">

                {/* Expert text */}
                <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 flex flex-col w-screen items-center mt-50">

                    <h1 className="w-fit text-5xl p-4 font-semibold text-blue-500">Our Experts</h1>
                    <p className="w-fit text-2xl p-5 font-medium text-black"><span className="text-blue-500 font-bold ">15000+ </span> Experts from India for Online Consultation  </p>

                </div>
                {/* Render 5 Cards */}
                <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100 w-screen min-h-fit flex flex-col items-center  mt-30">
                
                    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4 px-10 ">
                        <Expert_cards />
                        <Expert_cards  />
                        <Expert_cards  />
                        <Expert_cards  />
                        
                    </div> 
                </div>

            </div>
            
            {/* SECTION 4: OURR EXPERTS */}
            <div className="w-screen mt-36">
                <Testimonials/>
            </div>
            
        
        </div>
    </>
  );
};

export default LANDINGPAGE;
