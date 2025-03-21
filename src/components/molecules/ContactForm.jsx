import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const scriptURL = "https://script.google.com/macros/s/AKfycbzzbhkWCGd3K9mkkILW_mDSncXksP287KzrxFTiVeCdjuPht8XdOT-l5i5mmzH5celi/exec";
      
      try {
        setLoading(true);
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        
        if (response.ok) {
          setSuccessMessage("Thank you for your message. We'll get back to you soon!");
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          const errorText = await response.text();
          console.error("Error response:", errorText);
          setErrors({ form: "Failed to send message. Please try again later." });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ form: "An error occurred. Please try again later." });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="flex flex-col items-start justify-center gap-10 p-10 mb-4 mt-28 md:mb-36 md:flex-row">
      {/* Left: Contact Form */}
      <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/3">
        {successMessage ? (
          <div className="p-4 text-center text-green-700 bg-green-100 rounded-md">
            {successMessage}
          </div>
        ) : (
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={`w-full p-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>
            
            <div>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            {errors.form && (
              <div className="p-3 text-center text-red-700 bg-red-100 rounded-md">
                {errors.form}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="py-3 text-lg text-white transition bg-black rounded-md hover:bg-gray-800 disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      {/* Right: Contact Info */}
      <div className="w-full px-2 md:px-44 md:w-1/2">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        <div className="grid grid-cols-1 mt-10 gap-14 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <h3 className="text-lg font-semibold">Lhokseumawe, Aceh</h3>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 2a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3a2 2 0 0 0-1.8-2 12.8 12.8 0 0 1-4-1 2 2 0 0 0-2 .4l-2.2 1.7a14 14 0 0 1-6.8-6.8L9 8a2 2 0 0 0 .4-2 12.8 12.8 0 0 1-1-4A2 2 0 0 0 6.6 2Z" />
                </svg>
                <span>+62 6943 6956</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 0v.5l7 5.5 7-5.5V5H5Zm14 2.2-7 5.5-7-5.5V19h14V7.2Z" />
                </svg>
                <span>contact@domain.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A7 7 0 0 1 19 9c0 5.2-7 11-7 11S5 14.2 5 9a7 7 0 0 1 7-7Zm0 9a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z" />
                </svg>
                <span>Jl. Darussalam Hagu selatan</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}