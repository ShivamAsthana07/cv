import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white p-6 md:p-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        
        {/* Left - Copyright */}
        <div className="text-center md:text-left pt-4">
          <p className="text-gray-600 text-sm md:text-base">
            © 2025 by SHIVAM ASTHANA
          </p>
        </div>

        {/* Right - Contact & Socials */}
        <div className="flex flex-col md:flex-row md:space-x-16 space-y-6 md:space-y-0 text-center md:text-left">
          {/* Call */}
          <div>
            <h3 className="mb-2 font-semibold text-md">Call</h3>
            <p className="text-gray-600">+91 9930518907</p>
          </div>

          {/* Write at */}
          <div>
            <h3 className="mb-2 font-semibold text-md">Write at</h3>
            <p className="text-gray-600">asthanashivam1@gmail.com</p>
          </div>

          {/* Follow */}
          <div>
            <h3 className="mb-2 font-semibold text-md">Follow</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/ShivamAsthana07"
                className="text-black hover:text-blue-600 transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/asthanashivam1"
                className="text-black hover:text-blue-400 transition-colors"
              >
                <FaXTwitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-asthana-692138174/"
                className="text-black hover:text-blue-700 transition-colors"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="text-black hover:text-pink-600 transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
