import React from 'react';
import { MdDone } from "react-icons/md";

const Section = () => {
  return (
    <div className="px-4 lg:px-0 lg:max-w-7xl mx-auto container flex flex-wrap my-36">
      {/* Left Section with Image */}
      <div className="w-full md:w-1/2">
        <img className='w-[400px] grayscale hover:grayscale-0 rounded-xl relative lg:left-40' src="http://raditsoftware.com/img/featured-image-1.jpg" alt="Section Image" />
        <img className='w-[450px] grayscale hover:grayscale-0 rounded-xl relative lg:bottom-28' src="http://raditsoftware.com/img/featured-image-2.jpg" alt="Section Image" />
      </div>

      {/* Right Section with Text */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="lg:text-6xl text-4xl font-poppins font-bold mb-4">WE’RE PASSIONATE PEOPLE.</h2>
        <h3 className="lg:text-2xl text-xl font-semibold font-poppins text-red-700 mb-4">WE ARE COMMITTED TO PROVIDING OUR CUSTOMERS WITH EXCEPTIONAL SERVICE WHILE OFFERING OUR EMPLOYEES THE BEST TRAINING</h3>
        <p className="mb-4 font-poppins text-base lg:text-lg">
        At Radit Software, we specialize in converting ideas into innovative software products. With our experienced team, we turn your concepts into reality, providing top-notch solutions in full stack Java development, DevOps, AWS, and cloud migrations.
        </p>
        <p>
       
          <ul className="mb-8">
            <li className='text-lg font-poppins py-2 flex gap-2'><MdDone  color='red' size={30}/> 100 % client satisfaction.</li>
            <li className='text-lg font-poppins py-2 flex gap-2'> <MdDone color='red' size={30} /> Highly skilled employees</li>
            <li className='text-lg font-poppins py-2 flex gap-2'><MdDone  color='red' size={30}/> Rapid adoptions of technologies .</li>
          </ul>
        </p>


        <div>
            <button className='bg-red-500 hover:bg-black  px-8 py-4 font-poppins text-lg text-white rounded-lg'>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
