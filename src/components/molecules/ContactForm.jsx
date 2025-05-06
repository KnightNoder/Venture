import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    contactNumber: '',
    destinations: '',
    duration: '',
    adultCount: 1,
    childrenCount: 0, // CHD (Between 2yrs-12yrs)
    infantCount: 0, // Infants (Between 0.1-2yrs)
    hotelCategory: '',
    transportType: 'FIT',
    purposeOfVisit: '',
    moreInfo: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState({});

  const hotelCategories = ["3*", "4*", "5*", "Premium Luxury"];
  const transportOptions = [
    { value: 'FIT', label: 'FIT (Free Independent Traveler)' },
    { value: 'VAN', label: 'VAN (Group Transportation)' }
  ];
  const purposeOptions = ["Tourism","Others"];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    }
    
    if (!formData.destinations.trim()) {
      newErrors.destinations = 'Destination is required';
    }

    if (!formData.duration.trim()) {
      newErrors.duration = 'Duration is required';
    }

    if (!formData.hotelCategory) {
      newErrors.hotelCategory = 'Hotel category is required';
    }
    
    if (!formData.purposeOfVisit) {
      newErrors.purposeOfVisit = 'Purpose of visit is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : type === 'number' ? (value === '' ? '' : parseInt(value, 10)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwTBgk6OGL5hWUM_hK2fBXzhJUsdbqZjblYOxZCiHqAKveRlDVy2vBRrXY1u4cZ7Fp_/exec";
      
      try {
        setLoading(true);
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            companyName: formData.companyName,
            email: formData.email,
            contactNumber: formData.contactNumber,
            destinations: formData.destinations,
            duration: formData.duration,
            adultCount: formData.adultCount,
            childrenCount: formData.childrenCount,
            infantCount: formData.infantCount,
            hotelCategory: formData.hotelCategory,
            transportType: formData.transportType,
            purposeOfVisit: formData.purposeOfVisit,
            moreInfo: formData.moreInfo
          }),
        });
        
        if (response.ok) {
          setSuccessMessage("Thank you for your message. We'll get back to you soon with a travel plan!");
          setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            contactNumber: '',
            destinations: '',
            duration: '',
            adultCount: 1,
            childrenCount: 0,
            infantCount: 0,
            hotelCategory: '',
            transportType: 'FIT',
            purposeOfVisit: '',
            moreInfo: ''
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
    <section className="flex flex-col items-start justify-center gap-10 p-10 mb-4 md:mt-28 md:mb-36 md:flex-row">
      {/* Left: Contact Form */}
      <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-2/3">
        {successMessage ? (
          <div className="p-4 text-center text-green-700 bg-green-100 rounded-md">
            {successMessage}
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h3 className="mb-2 text-xl font-semibold">Travel Inquiry Form</h3>
            
            {/* Two column layout for the form */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name (Optional)"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
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
                  <label className="block mb-1 text-sm font-medium text-gray-700">Contact Number</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Contact Number"
                    className={`w-full p-3 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.contactNumber && <p className="mt-1 text-sm text-red-500">{errors.contactNumber}</p>}
                </div>

                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Country/Cities to be Visited</label>
                  <input
                    type="text"
                    name="destinations"
                    value={formData.destinations}
                    onChange={handleChange}
                    placeholder="Countries/Cities to visit"
                    className={`w-full p-3 border ${errors.destinations ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.destinations && <p className="mt-1 text-sm text-red-500">{errors.destinations}</p>}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Duration</label>
                  <input
                    type="text"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    placeholder="Duration"
                    className={`w-full p-3 border ${errors.duration ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  />
                  {errors.duration && <p className="mt-1 text-sm text-red-500">{errors.duration}</p>}
                </div>
              </div>
              
              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">No. of Adults</label>
                  <input
                    type="number"
                    name="adultCount"
                    min="1"
                    value={formData.adultCount}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">No. of Children (2-12 yrs)</label>
                  <input
                    type="number"
                    name="childrenCount"
                    min="0"
                    value={formData.childrenCount}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">No. of Infants (0.1-2 yrs)</label>
                  <input
                    type="number"
                    name="infantCount"
                    min="0"
                    value={formData.infantCount}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Hotel Category</label>
                  <select
                    name="hotelCategory"
                    value={formData.hotelCategory}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.hotelCategory ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  >
                    <option value="">Select hotel category</option>
                    {hotelCategories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  {errors.hotelCategory && <p className="mt-1 text-sm text-red-500">{errors.hotelCategory}</p>}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">FIT/VAN</label>
                  <div className="flex flex-col gap-2">
                    {transportOptions.map(option => (
                      <label key={option.value} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="transportType"
                          value={option.value}
                          checked={formData.transportType === option.value}
                          onChange={handleChange}
                          className="w-4 h-4 text-black border-gray-300 focus:ring-black"
                        />
                        <span>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Purpose of Visit</label>
                  <select
                    name="purposeOfVisit"
                    value={formData.purposeOfVisit}
                    onChange={handleChange}
                    className={`w-full p-3 border ${errors.purposeOfVisit ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-black`}
                  >
                    <option value="">Select purpose</option>
                    {purposeOptions.map(purpose => (
                      <option key={purpose} value={purpose}>{purpose}</option>
                    ))}
                  </select>
                  {errors.purposeOfVisit && <p className="mt-1 text-sm text-red-500">{errors.purposeOfVisit}</p>}
                </div>
                
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">More Info</label>
                  <textarea
                    rows="4"
                    name="moreInfo"
                    value={formData.moreInfo}
                    onChange={handleChange}
                    placeholder="Additional requirements or information"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>
            </div>
            
            {errors.form && (
              <div className="p-3 text-center text-red-700 bg-red-100 rounded-md">
                {errors.form}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="py-3 mt-4 text-lg font-medium text-white transition bg-black rounded-md hover:bg-gray-800 disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>

      {/* Right: Contact Info */}
      <div className="w-full px-2 md:px-12 md:w-1/3">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-2 text-gray-600">
        When you explore Europe, a few questions are bound to pop up.
        <br />
        That's why we're here! Give us a call, send us an email or use the form below, and we'll be happy to help!

        </p>

        <div className="mt-10 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Navi Mumbai , Maharashtra , India - 410210</h3>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 2a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3a2 2 0 0 0-1.8-2 12.8 12.8 0 0 1-4-1 2 2 0 0 0-2 .4l-2.2 1.7a14 14 0 0 1-6.8-6.8L9 8a2 2 0 0 0 .4-2 12.8 12.8 0 0 1-1-4A2 2 0 0 0 6.6 2Z" />
                </svg>
                <span>+91-9768004545</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 0v.5l7 5.5 7-5.5V5H5Zm14 2.2-7 5.5-7-5.5V19h14V7.2Z" />
                </svg>
                <span>inquiry@travellerssolution.com</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}