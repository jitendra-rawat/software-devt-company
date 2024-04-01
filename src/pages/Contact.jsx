import React from 'react';

const ContactPage = () => {
  return (
    <div className="px-4 lg:px-0 lg:max-w-7xl container mx-auto flex flex-col lg:flex-row justify-center items-start lg:h-screen py-28 ">

        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl lg:text-5xl font-poppins font-bold mb-8">WE ARE ALWAYS HERE TO HELP YOU.</h2>
          <p className="mb-8 font-poppins text-xl ">Our development center resides in Tirupati and Bangalore India.</p>
        
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 font-poppins">Office</h3>
            <p className="mb-4 font-poppins">#9-567,<br /> Lingeswara Nagar,<br /> Aviala, Tirupati, India</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2 font-poppins">Email Address</h3>
            <p className="mb-1 font-poppins">admin@raditsoftware.com</p>
    
          </div>

         
          <div className="mb-4">
      
          <h3 className="text-xl font-bold mb-2 font-poppins">Contact Number</h3>
            <p className='font-poppins'>0877-4005595</p>
          </div>

        </div>

   {/* right section */}
            
        <div className="md:w-1/2">
   
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1 font-poppins">Your Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1 font-poppins">Email Address</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold mb-1 font-poppins">Phone Number</label>
              <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block font-semibold mb-1 font-poppins">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-1 font-poppins">Write Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="bg-red-500 font-poppins hover:bg-red-700 text-white font-semibold py-4 px-8 rounded">
            Send Message
            </button>
          </form>
        </div>

      </div>

  );
};

export default ContactPage;
