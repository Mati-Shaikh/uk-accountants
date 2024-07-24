import { Swiper, SwiperSlide } from 'swiper/react';


const testimonials = [
  {
    quote: "This product is amazing! It changed my life.",
    name: "John Doe",
    title: "CEO, Example Corp",
    image: "/image.jpg"
  },
  {
    quote: "Fantastic service and support. Highly recommend!",
    name: "Jane Smith",
    title: "CTO, Another Corp",
    image: "/image1.jpg"
  },
  {
    quote: "High quality and great customer service.",
    name: "Sam Wilson",
    title: "Manager, Some Company",
    image: "/image2.jpg"
  }
];

const Testimonial = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Testimonials
        </h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg p-8 mx-4 text-center">
                <div className="flex justify-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <p className="text-xl italic text-gray-800 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-gray-900 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-gray-600">
                  {testimonial.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
