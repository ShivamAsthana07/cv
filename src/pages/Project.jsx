import React from 'react';

const ProjectCard = ({ 
  title, 
  role, 
  description, 
  imageSrc, 
  imageAlt, 
  accentColor = 'blue' 
}) => {
  const colorClasses = {
    blue: 'bg-blue-600 text-blue-600',
    green: 'bg-green-600 text-green-600',
    purple: 'bg-purple-600 text-purple-600',
    red: 'bg-red-600 text-red-600'
  };

  return (
    <div className="flex flex-col lg:flex-row font-sans bg-white rounded-lg shadow-xl max-w-4xl w-full h-[400px] overflow-hidden">
      {/* Left Content Section */}
      <div className="flex-1 bg-white px-8 md:px-12 py-8 md:py-12 flex items-center">
        <div className="max-w-lg w-full">
          {/* Project Header */}
          <div className="flex items-center mb-2">
            <div className={`w-1 h-8 md:h-10 ${colorClasses[accentColor].split(' ')[0]} mr-4 md:mr-5`}></div>
            <h1 className={`text-xl md:text-2xl font-bold ${colorClasses[accentColor].split(' ')[1]} m-0`}>
              {title}
            </h1>
          </div>
          
          {/* Role Title */}
          <h2 className="text-gray-600 text-sm md:text-base font-normal ml-5 md:ml-6 mb-3 md:mb-4 mt-0">
            {role}
          </h2>
          
          {/* Description */}
          <p className="text-gray-800 text-xs md:text-sm leading-relaxed ml-5 md:ml-6 m-0">
            {description}
          </p>
        </div>
      </div>
      
      {/* Right Image Section */}
      <div className="flex-1 relative">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const ProjectShowcase = () => {
  const projects = [
    {
      title: "DBank App",
      role: "Full Stack Developer",
      description: "A modern digital banking application built with React and blockchain technology. Features secure transactions, real-time balance updates, and an intuitive user interface for seamless banking experience.",
      imageSrc: "src/assets/generated-image.png",
      imageAlt: "DBank App Interface",
      accentColor: "blue"
    },
    {
      title: "E-Commerce Platform",
      role: "Frontend Developer", 
      description: "A comprehensive e-commerce solution with advanced product filtering, secure payment integration, and responsive design. Built with modern web technologies to deliver excellent user experience across all devices.",
      imageSrc: "src/assets/generated-image 2.png",
      imageAlt: "E-Commerce Platform Interface",
      accentColor: "green"
    },
    {
      title: "E-Commerce Platform",
      role: "Frontend Developer", 
      description: "A comprehensive e-commerce solution with advanced product filtering, secure payment integration, and responsive design. Built with modern web technologies to deliver excellent user experience across all devices.",
      imageSrc: "src/assets/generated-image 2.png",
      imageAlt: "E-Commerce Platform Interface",
      accentColor: "purple"
    }
  ];

  return (
    <div className="bg-[#e6dace] min-h-screen flex flex-col items-center justify-center p-8 gap-8 pt-40">
      <h1 className="text-4xl font-bold text-gray-900 mb-3">Projects</h1>
      <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-4"></div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
