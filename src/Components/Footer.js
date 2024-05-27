
import React from 'react';
import img from '../images/logobird.png'
import '../css/Footer.css'
import '../css/Footer.scss'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="relative overflow-hidden font-poppins ">
      {/* Overlapping CTA Section */}
      
      <div className="flex justify-center items-center ">
         <div className=" w-2/3 rounded-xl py-16 px-8 relative shadow-lg flex flex-col items-start your-pattern-class ">
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-700 via-yellow-500 to-gray-600 bg-clip-text text-transparent">Ready to get started?</h2>
            <p className="mt-10 text-3xl bg-gradient-to-r from-gray-800 to-yellow-500 text-transparent bg-clip-text">Talk to us today</p>
           <div className="mt-6 ml-auto">
          
            <button className="px-10 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-slate-500 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-900 focus:ring-opacity-50" >Get started</button>
           </div>
          </div>
       </div>
       


      {/* Main Footer */}
      <div className="bg-gray-900 mt-[-9rem] pt-20 pb-10 px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Footer Links */}
          <div className="lg:flex justify-evenly items-start mt-48 flex-grow ">
          <div className="lg:w-1/4 mb-6 lg:mb-0  sm:mr-0 sm:w-1/2 pl-20">
              <img src={img} alt="logo" className="w-full h-auto" style={{ maxWidth: '200px' }} />
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 contact-heading-container">
            <h6 className="mb-4 font-bold contact-heading pb-10 "><span><a href="#" className="uppercase hover:text-yellow-500 text-gray-400  ">What we do?</a></span></h6>
              <ul>
              
                <li className="mb-2 mt-3"><a href="#" className="hover:text-yellow-500 text-gray-500">Web App</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-500 text-gray-500 ">Research and Development</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-500 text-gray-500 ">Testing</a></li>
              </ul>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 contact-heading-container">
              <h6 className="mb-4 font-bold contact-heading"><span><a href="#" className="uppercase hover:text-yellow-500 text-gray-400 ">Who we are?</a></span></h6>
              <ul>
                <li className="mb-2 mt-3"><a href="#" className="hover:text-yellow-500 text-gray-500">
                <Link to = '/home'>Home</Link>
                </a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-500 text-gray-500">
                <Link to = '/careers'>Careers</Link>
                </a></li><li className="mb-2"><a href="#" className="hover:text-yellow-500 text-gray-500">
                <Link to = '/about'>About</Link>
                  </a></li>
              </ul>
            </div>
            <div className="lg:w-1/4 mb-6 lg:mb-0 contact-heading-container">
            <h6 className="mb-4 font-bold contact-heading"><span><a href="#" className="uppercase hover:text-yellow-500 text-gray-400 ">Infinest Tech</a></span></h6>
              <ul>
                <li className="mb-2 mt-3" ><a href="#" className="hover:text-yellow-500 text-gray-500">infinest@gmail</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-500 text-gray-500">91+ 96009 25477</a></li>
                <li className="mb-2"><a href="#" className="hover:text-yellow-500 text-gray-500">Coimbatore</a></li>
              </ul>
            </div>
          </div>
          
          {/* Social Icons */}
          
          <div className="social-container text-center mx-auto">
            <ul className="social-icons">
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a target='_blank' href="https://wa.me/916382633918"><i className="fa fa-whatsapp  "></i></a></li>
            </ul>
            <div className="text-center text-gray-500 mt-10">
              © 2024 Infinest Tech. All rights reserved.
            </div>
          </div>
         
          {/* Copyright */}
         
        </div>
      </div>
    </div>
  );
};

export default Footer;
