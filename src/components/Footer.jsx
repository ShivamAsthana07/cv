import React from 'react'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer className="bg-white p-4 flex justify-between items-center h-[150px] max-w-[1400px] mx-auto">
            <div>
                <p className="text-center text-gray-600">© 2025 by SHIVAM ASTHANA</p>
            </div>

            <div className="flex space-x-25">
                <div>
                    <h3 className="text-center mb-2 font-semibold text-md">Call</h3>
                    <p className="text-center text-gray-600">+91 9930518907</p>
                </div>
                <div>
                    <h3 className="text-center mb-2 font-semibold text-md">Write at</h3>
                    <p className="text-center text-gray-600">asthanashivam1@gmail.com</p>
                </div>
                <div className="space-x-4">
                    <h3 className="text-center mb-2 font-semibold text-md mr-0">Follow</h3>
                    <div className="flex space-x-4 justify-center" >
                        <a href="#" className="text-black hover:text-blue-600 transition-colors">
                            <FaGithub size={20} />
                        </a>
                        <a href="#" className="text-black hover:text-blue-400 transition-colors">
                            <FaXTwitter size={20} />
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
        </footer>
    )
}

export default Footer