import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Banner = () => {
  const bannerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const scrollPosition = window.scrollY;
        bannerRef.current.style.backgroundPositionY = `${-scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 }
    }));
  }, [controls]);

  return (
    <section className='lg:relative lg:my-16 '>
      
      <div
        ref={bannerRef}
        className='bg-banner bg-cover bg-center   lg:h-300 bg-blend-darken'
      >
        {/* Content */}
        <div className='text-black  lg:max-w-5xl container mx-auto flex flex-col lg:flex-row justify-between items-center py-16 lg:py-36 px-4 lg:px-0 relative z-10'>
        
          <motion.div className='mb-8 lg:mb-0' custom={0} initial={{ opacity: 0, y: 20 }} animate={controls}>
            <h2 className='font-poppins text-6xl font-bold text-center text-white'>20</h2>
            <p className='font-poppins text-xl font-semibold text-center text-red-700'>Satisfied Clients</p>
          </motion.div>

          <motion.div className='mb-8 lg:mb-0' custom={1} initial={{ opacity: 0, y: 20 }} animate={controls}>
            <h2 className='font-poppins text-6xl font-bold text-center text-white'>40</h2>
            <p className='font-poppins text-xl font-semibold text-center text-red-700'>Project Completed</p>
          </motion.div>

          <motion.div className='mb-8 lg:mb-0' custom={2} initial={{ opacity: 0, y: 20 }} animate={controls}>
            <h2 className='font-poppins text-6xl font-bold text-center text-white'>45</h2>
            <p className='font-poppins text-xl font-semibold text-center text-red-700'>Project Launched</p>
          </motion.div>

          <motion.div className='mb-8 lg:mb-0' custom={3} initial={{ opacity: 0, y: 20 }} animate={controls}>
            <h2 className='font-poppins text-6xl font-bold text-center text-white'>5</h2>
            <p className='font-poppins text-xl font-semibold text-center text-red-700'>Years in Market</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
