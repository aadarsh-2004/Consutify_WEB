

const Feature_card = () => {
  return (
    <div className="bg-gradient-to-r from-white via-blue-50 to-blue-100  flex flex-wrap justify-around">

        {/* card 1 */}
        <div className="CARD-1 flex flex-col items-center bg-white w-80 border-none rounded-xl m-2 shadow-xl backdrop-blur-md shadow-blue-300">
        <i className="fa fa-brain fa-4x m-12"></i>
        <p className="text-2xl font-mono font-semibold m-3">Smart Expert Matching</p>
        <p className="text-lg m-2 pb-8 p-2">Our AI matches you with the best expert tailored to your needs, ensuring the right fit every time.</p>
        <button className="btn bg-blue-500 text-white font-medium p-5  m-3 mt- my-8 rounded-lg" type="submit"><i className="fa fa-book mr-2"></i>Know More</button>
        </div>

        {/* card 2 */}
        <div className="CARD-1 flex flex-col items-center bg-white w-80 border-none rounded-xl m-2 shadow-xl backdrop-blur-md shadow-blue-300">
            <i className="fa fa-file-alt fa-4x m-12"></i>
            <p className="text-2xl font-mono font-semibold m-3">Consultation Summary</p>
            <p className="text-lg m-2 p-2">Get a detailed summary of your consultation, including chat transcripts and call-to-text for easy reference.</p>
            <button className="btn bg-blue-500 text-white font-medium p-5  m-3 my-8 rounded-lg" type="submit"><i className="fa fa-book mr-2"></i>Know More</button>
        </div>

        {/* card 3 */}
        <div className="CARD-1 flex flex-col items-center bg-white w-80 border-none rounded-xl m-2 shadow-xl backdrop-blur-md shadow-blue-300">
        <i className="fa fa-comments fa-4x m-12"></i>
        <p className="text-2xl font-mono font-semibold m-3">Smart Consultation</p>
        <p className="text-lg m-2 p-2 ">Our AI Assistant helps you prepare, ask the right questions, and organizes your thoughts for a seamless consultation.</p>
        <button className="btn bg-blue-500 text-white font-medium p-5  m-3 my-8 rounded-lg" type="submit"><i className="fa fa-book mr-2"></i>Know More</button>
        </div>
    </div>

    
  )
}

export default Feature_card
