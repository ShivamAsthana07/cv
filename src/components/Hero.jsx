import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#e6dace] flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-40">
        {/* Profile Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-[#f4ece6] rounded shadow-2xl pt-8 w-full max-w-sm">
            {/* Profile Image */}
            <div className="flex justify-center mb-6">
              <div className="w-64 h-64 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="src\assets\profile.jpg" 
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Name */}
            <div className="text-center mb-6">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Shivam </h1>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Asthana</h1>
              <div className="w-12 h-0.5 bg-blue-400 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg font-medium tracking-widest uppercase mt-6">
                WEB DEVELOPER
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6 bg-white w-full p-4">
              <a href="#" className="text-black hover:text-blue-600 transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-black hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-black hover:text-blue-700 transition-colors">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-black hover:text-pink-600 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="lg:pl-1">
          <h2 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6">
            Hello
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 font-medium">
            Here's who I am & what I do
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-blue-600 hover:bg-white hover:text-black border border-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              RESUME
            </button>
            <button className="border border-blue-600 bg-white text-black hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              PROJECTS
            </button>
          </div>
          
          {/* Description */}
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
            </p>
            <p>
              I'm a great place for you to tell a story and let your users know a little more about you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}