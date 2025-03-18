// import TestimonialImage from '../../assets/images/Testimonial.png'
import Testimonial from '../../assets/images/Testimonial.png';


const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Traveller",
    review: "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Traveller",
    review: "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  },
  {
    id: 3,
    name: "John Smith",
    role: "Traveller",
    review: "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  }
];

const Testimonials = () => {
  return (
    <section className="max-w-6xl px-6 py-12 mx-auto">
      <h2 className="mb-6 text-3xl font-bold">Testimonials</h2>

      {/* Testimonials Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6 bg-white rounded-lg shadow-lg">
            {/* User Image */}
            <div className="flex justify-center">
              <img 
                src={Testimonial} 
                alt={testimonial.name} 
                className="w-16 h-16 border border-gray-200 rounded-full"
              />
            </div>

            {/* Review */}
            <h3 className="mt-4 text-lg font-bold text-center text-red-600">
              Excellent Service
            </h3>
            <p className="mt-2 text-sm text-center text-gray-700">
              {testimonial.review}
            </p>

            {/* User Info */}
            <div className="mt-4 text-center">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
