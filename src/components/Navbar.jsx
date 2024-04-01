import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubMenu = (index) => {
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  return (
    <nav className=' shadow-md shadow-red-100 mt-4 bg-transparent px-8 py-4  lg:max-w-7xl mx-auto container flex justify-between items-center'>

      {/* left section */}
      <div>
        <h2 className='text-lg lg:text-3xl font-bold font-poppins cursor-pointer '>Radit Software Solutions Pvt Ltd</h2>
      </div>
      
      {/* right section */}
      <div className="hidden md:block"> 
        <ul className='flex items-center justify-between gap-8 '>
          <Link to="/"><li className='font-poppins font-semibold text-lg cursor-pointer'>Home</li></Link>
          <li className="font-poppins font-semibold text-lg relative cursor-pointer flex gap-2 items-center"
              onMouseEnter={() => toggleSubMenu(0)}
              onMouseLeave={() => toggleSubMenu(null)}>
            Insights <FaAngleDown />
            <AnimatePresence>
              {activeSubMenu === 0 && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 z-10 bg-white py-2 shadow-md rounded-md cursor-pointer w-[200px]" 
                >
                                    <Link to="/services/web"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>About Us</li></Link>
                  <Link to="/services/mobile"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>FAQ's</li></Link>
                  <Link to="/services/design"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Pricing</li></Link>
               
                  <Link to="/services/web"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Team</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        
          {/* Services */}
          <li className="font-poppins font-semibold text-lg relative cursor-pointer flex gap-2 items-center"
              onMouseEnter={() => toggleSubMenu(1)}
              onMouseLeave={() => toggleSubMenu(null)}>
            Services <FaAngleDown />
            <AnimatePresence>
              {activeSubMenu === 1 && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 z-10 bg-white py-2 shadow-md rounded-md cursor-pointer w-[300px]"
                >
                  <Link to="/"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Full Stack Development</li></Link>
                  <Link to="/"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Cloud Migrations</li></Link>
                  <Link to="/"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Product Development</li></Link>
               
                  <Link to="/services/web"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Software Consulting</li></Link>

               
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {/* Blog */}
          <li className="font-poppins font-semibold text-lg relative cursor-pointer flex gap-2 items-center"
              onMouseEnter={() => toggleSubMenu(2)}
              onMouseLeave={() => toggleSubMenu(null)}>
            Blog <FaAngleDown />
            <AnimatePresence>
              {activeSubMenu === 2 && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-full left-0 z-10 bg-white py-2 shadow-md rounded-md cursor-pointer w-[300px]"
                >
                  <Link to="/"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Machine Learning</li></Link>
                  <Link to="/"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>AWS Cloud Migration</li></Link>
                  <Link to="/"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Evolution of Technologies</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <Link to="/contact"><li className='font-poppins font-semibold text-lg cursor-pointer'>Contact Us</li></Link>
        </ul>
      </div>

      {/* toggle menu icon */}
      <div className="block md:hidden">
        <button onClick={toggleMenu} className="text-gray-900 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-14 left-0 right-0 bg-blue-500 z-10 shadow-md py-4"
          >
            <ul className="flex flex-col items-center justify-end">
              <Link to="/" onClick={toggleMenu}><li className='font-poppins font-semibold  my-2'>Home</li></Link>
              {/* Similarly handle Insights, Services, Blog, and Contact Us */}
              {/* Insights */}
              <li className="font-poppins font-semibold relative my-2 cursor-pointer"
                  onMouseEnter={() => toggleSubMenu(0)}
                  onMouseLeave={() => toggleSubMenu(null)}>
                Insights
                <AnimatePresence>
                  {activeSubMenu === 0 && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 bg-white py-2 shadow-md rounded-md cursor-pointer"
                    >
                      <Link to="/insights/overview" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Overview</li></Link>
                      <Link to="/insights/case-studies" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Case Studies</li></Link>
                      <Link to="/insights/research" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Research</li></Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {/* Services */}
              <li className="font-poppins font-semibold relative my-2 cursor-pointer"
                  onMouseEnter={() => toggleSubMenu(1)}
                  onMouseLeave={() => toggleSubMenu(null)}>
                Services
                <AnimatePresence>
                  {activeSubMenu === 1 && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 bg-white py-2 shadow-md rounded-md cursor-pointer"
                    >
                      <Link to="/services/web" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Web Development</li></Link>
                      <Link to="/services/mobile" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Mobile Development</li></Link>
                      <Link to="/services/design" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Design Services</li></Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {/* Blog */}
              <li className="font-poppins font-semibold relative my-2 cursor-pointer"
                  onMouseEnter={() => toggleSubMenu(2)}
                  onMouseLeave={() => toggleSubMenu(null)}>
                Blog
                <AnimatePresence>
                  {activeSubMenu === 2 && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 bg-white py-2 shadow-md rounded-md cursor-pointer"
                    >
                      <Link to="/blog/tech" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Tech Articles</li></Link>
                      <Link to="/blog/tips" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Tips & Tricks</li></Link>
                      <Link to="/blog/news" onClick={toggleMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Company News</li></Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <Link to="/contact" onClick={toggleMenu}><li className='font-poppins font-semibold  my-2'>Contact Us</li></Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
