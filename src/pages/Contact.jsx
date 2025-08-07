import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      details: "asthanashivam1@gmail.com",
      link: "mailto:asthanashivam1@gmail.com"
    },
    {
      icon: FaPhone,
      title: "Phone",
      details: "+91 9930518907",
      link: "tel:+919930518907"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      details: "Mumbai, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/shivam-asthana",
      color: "hover:text-blue-600"
    },
    {
      icon: FaGithub,
      name: "GitHub",
      url: "https://github.com/shivamasthana",
      color: "hover:text-gray-800"
    },
    {
      icon: FaXTwitter,
      name: "Twitter",
      url: "https://twitter.com/shivamasthana",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section className="bg-[#e6dace] py-16 px-4 pt-[200px]">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-black mb-4">Get In Touch</h1>
          <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about web development and technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 pt-16">
            <h2 className="text-2xl font-bold text-black mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2 mt-4">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-black border border-blue-600 cursor-pointer transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info & Social */}
          <div className="space-y-8">
            
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-blue-500 text-xl" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">{info.title}</h3>
                        {info.link !== "#" ? (
                          <a 
                            href={info.link}
                            className="text-gray-600 hover:text-blue-500 transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.details}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-black mb-6">Connect With Me</h2>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} transition-colors duration-300 hover:shadow-md`}
                      title={social.name}
                    >
                      <IconComponent className="text-xl" />
                    </a>
                  );
                })}
              </div>
              
              <p className="text-gray-600 mt-4 text-sm">
                Feel free to connect with me on social media or check out my latest projects on GitHub.
              </p>
            </div>

            {/* Availability Status */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-black">Available for Work</h3>
              </div>
              <p className="text-gray-600">
                I'm currently available for full-time opportunities. 
                Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-black mb-4">Let's Build Something Amazing Together</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Whether you're looking for a skilled MERN stack developer for your next project, 
              need help with an existing application, or just want to discuss the latest in web development, 
              I'd love to hear from you. I typically respond to all messages within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
