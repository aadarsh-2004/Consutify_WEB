

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Nakul Pandya",
      title: "Freelancer",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
      imageUrl: "https://via.placeholder.com/100", // Replace with actual image
    },
    

    {
      name: "Talent Jain",
      title: "Equity Manager",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
      imageUrl: "https://via.placeholder.com/100", // Replace with actual image
    },
    {
      name: "Siddharth Menaria",
      title: "Marketing Lead",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis.",
      imageUrl: "https://via.placeholder.com/100", // Replace with actual image
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-300  via-blue-100 to-blue-300   py-16">
      <h2 className="text-center text-4xl font-bold mb-12">
        What Our Clients Say About Us
      </h2>

      {/* Slider Arrows */}
      <div className="relative  max-w-screen h-fit text-white ">
        <div className="flex overflow-x-scroll-hide flex-wrap  py-4 scrollbar-hide bg-gradient-to-r from-blue-300 via-blue-100 to-blue-300 justify-center ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-black bg-opacity-90 rounded-2xl shadow-xl text-center m-8 p-8 w-72 h-72 transform hover:scale-125 hover:bg-gradient-to-t from-purple-300-400  to-blue-100 hover:text-black text-white transition-all duration-500  "
            >
              {/* Avatar */}
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"     
              />
              {/* Testimonial Content */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm font-light">{testimonial.title}</p>
                <blockquote className=" italic mt-4 text-gray-300 hover:text-black">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
