import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const slidesData = [
  {
    id: 1,
    title: "Welcome to Radit",
    subtitle: "Software Development Company",
    image: "https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
  },
  {
    id: 2,
    title: "We Create Ideas",
    subtitle: "Built Stunning Products",
    image: "https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_1280.jpg"
  },
  {
    id: 3,
    title: "We Deal With Technologies",
    subtitle: "Provide Software Services",
    image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slidesData.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="px-4 lg:px-0 flex flex-col-reverse lg:flex-row justify-between items-center h-[700px] lg:h-screen lg:max-w-7xl mx-auto container">

      <div className="lg:w-1/2">
        <motion.h1 
          className="text-4xl lg:text-7xl font-poppins text-center lg:text-left font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {slidesData[currentSlide].title}
        </motion.h1>
        <motion.h2 
          className="text-xl lg:text-3xl text-center lg:text-left font-poppins text-gray-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          {slidesData[currentSlide].subtitle}
        </motion.h2>

<div className='flex justify-center lg:justify-start'>

<motion.button 
          onClick={() => handleSlideChange((currentSlide + 1) % slidesData.length)} 
          className="bg-red-500 hover:bg-red-700 text-white font-poppins font-bold py-4 px-8 rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          Discover More
        </motion.button>

</div>
    


      </div>

      <div className="lg:w-1/2">
        {slidesData.map((slide, index) => (
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className="z-auto rounded-full w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] object-cover absolute left-0 right-0 top-36 lg:left-[800px]  lg:top-36"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 2s ease-in-out'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
