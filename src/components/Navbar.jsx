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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className=' shadow-md shadow-red-100 mt-4 bg-transparent px-8 py-4  lg:max-w-7xl mx-auto container flex justify-between items-center'>

      {/* left section */}
      <div>
    <Link to={'/'}>
    <h2 className='text-lg lg:text-3xl font-bold font-poppins cursor-pointer '>Radit Software Solutions </h2>   </Link>  
      </div>
      
      {/* right section */}
      <div className="hidden md:block"> 
        <ul className='flex items-center justify-between gap-8 '>
          <Link to="/"><li className='font-poppins font-semibold text-lg cursor-pointer'>Home</li></Link>
          <li className="font-poppins font-semibold text-lg relative cursor-pointer flex gap-2 items-center"
              onClick={() => toggleSubMenu(0)}>
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
                  <Link to="/about"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>About Us</li></Link>
                  <Link to="/faq"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>FAQ's</li></Link>
                  <Link to="/pricing"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Pricing</li></Link>
                  <Link to="/team"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Team</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        
          {/* Services */}
          <li className="font-poppins font-semibold text-lg relative cursor-pointer flex gap-2 items-center"
              onClick={() => toggleSubMenu(1)}>
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
                  <Link to="/full-stack"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Full Stack Development</li></Link>
                  <Link to="/cloud-migration"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Cloud Migrations</li></Link>
                  <Link to="/product-development"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Product Development</li></Link>
                  <Link to="/software-consulting"><li className='font-poppins font-semibold text-lg px-4 py-2 text-black'>Software Consulting</li></Link>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          {/* Blog */}
          <li className="font-poppins font-semibold text-lg relative cursor-pointer flex gap-2 items-center"
              onClick={() => toggleSubMenu(2)}>
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
            className="md:hidden absolute top-16 left-0 right-0 bg-gray-100 z-10 shadow-md py-4"
          >
            <ul className="flex flex-col items-center justify-end ml-64">
              <Link to="/" onClick={closeMenu}><li className='font-poppins font-semibold  my-2'>Home</li></Link>
            
              {/* Insights */}
              <li className="font-poppins font-semibold relative my-2 cursor-pointer flex gap-2 items-center"
                  onClick={() => toggleSubMenu(0)}>
                Insights <FaAngleDown />
                <AnimatePresence>
                  {activeSubMenu === 0 && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 bg-white py-2 shadow-md rounded-md cursor-pointer z-10"
                    >
                      <Link to="/about" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>About</li></Link>
                      <Link to="/faq" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>FAQ's</li></Link>
                      <Link to="/team" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Team</li></Link>
                      <Link to="/pricing" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Pricing</li></Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {/* Services */}
              <li className="font-poppins font-semibold relative my-2 cursor-pointer flex gap-2 items-center"
                  onClick={() => toggleSubMenu(1)}>
                Services <FaAngleDown />
                <AnimatePresence>
                  {activeSubMenu === 1 && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 bg-white z-10 py-2 shadow-md rounded-md cursor-pointer"
                    >
                      <Link to="/full-stack" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Full Stack Development</li></Link>
                      <Link to="/cloud-migration" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Cloud Migrations</li></Link>
                      <Link to="/product-development" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Product Development</li></Link>
                   
                      <Link to="/software-consulting" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Software Consulting</li></Link> </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              {/* Blog */}
              <li className="font-poppins font-semibold relative my-2 cursor-pointer flex gap-2 items-center"
                  onClick={() => toggleSubMenu(2)}>
                Blog <FaAngleDown />
                <AnimatePresence>
                  {activeSubMenu === 2 && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full left-0 z-10 bg-white py-2 shadow-md rounded-md cursor-pointer"
                    >
                      <Link to="/" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Machine Learning</li></Link>
                      <Link to="/" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>AWS Cloud Migration</li></Link>
                      <Link to="/" onClick={closeMenu}><li className='font-poppins font-semibold text-lg px-4 py-2'>Evolution of Technologies</li></Link>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <Link to="/contact" onClick={closeMenu}><li className='font-poppins font-semibold  my-2'>Contact Us</li></Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}

export default Navbar;
