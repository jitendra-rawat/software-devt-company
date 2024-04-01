import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { VscDebugBreakpointConditionalUnverified } from "react-icons/vsc";
import { IoIosHelpCircleOutline } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-36">

      <div className="px-4 lg:px-0 lg:max-w-7xl container mx-auto flex flex-col md:flex-row items-start justify-between">

        {/* Site Info */}
        <div className="mb-6 md:mb-0 w-2/3 ">
          <h2 className="text-4xl font-bold font-poppins mb-2">RADIT Software</h2>
          <p className="mb-4 text-lg font-poppins">Welcome to our Software <br /> Development and services company.</p>
          <div className="flex space-x-6">
            <FaFacebook   className="text-xl cursor-pointer" />
            <FaTwitter size={30} className="text-xl cursor-pointer" />
            <FaInstagram size={30} className="text-xl cursor-pointer" />
            <FaLinkedin size={30} className="text-xl cursor-pointer" />
          </div>
        </div>

        {/* Support Links */}
        <div className="mb-6 md:mb-0 w-1/3">
          <h3 className="text-2xl font-bold mb-4">Explore</h3>
          <ul className="list-none">
          <li className='font-poppins text-lg mb-2 flex gap-2 items-start'> <BiSupport color='red' />Support</li>
            <li className='font-poppins text-lg mb-2 flex gap-2 items-start'>  <MdOutlinePrivacyTip color='red' />Privacy Policy</li>
            <li className='font-poppins text-lg mb-2 flex gap-2 items-start' >  <VscDebugBreakpointConditionalUnverified  color='red' />Terms of Use</li>
            <li className='font-poppins text-lg flex gap-2 items-start '>  <IoIosHelpCircleOutline color='red' />Help</li>
          </ul>
        </div>

        {/* Branches */}
        <div className='w-1/3'>
          <h3 className="text-2xl font-bold mb-4">Branches</h3>
          <ul className="">
            <li className='font-poppins text-lg flex gap-2 items-start mb-2'>
            <FaLocationDot color='red' />42 Queens Square, Sarjapur, Bangalore, India
            </li>
            <li className='font-poppins text-lg flex gap-2 items-start mb-2'>
            <FaLocationDot color='red' />Lingeswara Nagar, Tirupati, AndraPradesh, India
            </li>
            <li className='font-poppins text-lg flex gap-2 items-start mb-2'>
            <FaLocationDot color='red' />Fenchurch Street London,UK
            </li>
            <li className='font-poppins text-lg flex gap-2 items-start mb-2'>
            <IoIosMail color='red' />admin@raditsoftware.com

            </li>
            <li className='font-poppins text-lg flex gap-2 items-start mb-2'>
            <IoMdCall  color='red' />0877-4005595
            </li>
          </ul>
        </div>

      </div>

       
       <div className='px-4 lg:px-0 flex items-end lg:justify-center relative top-28'>
        <p className='font-poppins text-xs lg:text-base font-bold lg:text-center '>Copyright © 2023 RADIT Software Solutions Pvt Ltd. All rights reserved.</p>
       </div>
    </footer>
  );
}

export default Footer;
