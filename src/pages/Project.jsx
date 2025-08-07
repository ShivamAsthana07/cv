import React from 'react';

const ProjectCard = ({ 
  title, 
  role, 
  description, 
  imageSrc, 
  imageAlt, 
  accentColor = 'blue',
  imageOnLeft = false
}) => {
  const backgroundColors = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600',
    red: 'bg-red-600'
  };
  
  const textColors = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    red: 'text-red-600'
  };

  return (
    <div className="flex flex-col lg:flex-row font-sans bg-white rounded-lg shadow-xl max-w-4xl w-full min-h-[400px] overflow-hidden">
      {/* Content Section */}
      <div className={`flex-1 bg-white px-8 md:px-12 py-8 md:py-12 flex items-center ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="max-w-lg w-full">
          <div className="flex items-center mb-2">
            <div className={`${backgroundColors[accentColor]} mr-4 md:mr-5 w-1 h-8 md:h-10`}></div>
            <h1 className={`text-xl md:text-2xl font-bold ${textColors[accentColor]} m-0`}>
              {title}
            </h1>
          </div>
          
          <h2 className="text-gray-600 text-sm md:text-base font-normal ml-5 md:ml-6 mb-3 md:mb-4 mt-0">
            {role}
          </h2>
          
          <p className="text-gray-800 text-xs md:text-sm leading-relaxed ml-5 md:ml-6 m-0">
            {description}
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className={`flex-1 relative ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
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
      accentColor: "blue",
      imageOnLeft: false
    },
    {
      title: "E-Commerce Platform",
      role: "Frontend Developer", 
      description: "A comprehensive e-commerce solution with advanced product filtering, secure payment integration, and responsive design. Built with modern web technologies to deliver excellent user experience across all devices.",
      imageSrc: "src/assets/ecom.png",
      imageAlt: "E-Commerce Platform Interface",
      accentColor: "green",
      imageOnLeft: true
    },
    {
      title: "Task Management App",
      role: "UI/UX Designer", 
      description: "An intuitive task management application with drag-and-drop functionality, team collaboration features, and real-time updates. Designed for maximum productivity and seamless workflow management.",
      imageSrc: "src/assets/task.png",
      imageAlt: "Task Management Interface",
      accentColor: "purple",
      imageOnLeft: false
    },
    {
      title: "Weather Dashboard",
      role: "Frontend Developer",
      description: "A responsive weather application with interactive maps, detailed forecasts, and location-based services. Features real-time weather data, beautiful animations, and cross-platform compatibility.",
      imageSrc: "src/assets/weather.png",
      imageAlt: "Weather Dashboard Interface",
      accentColor: "red",
      imageOnLeft: true
    }
  ];

  return (
    <div className="bg-[#e6dace] min-h-screen flex flex-col items-center justify-center p-8 gap-8 pt-40">
      <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
      <div className="w-12 h-0.5 bg-blue-600 mx-auto mb-4"></div>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectShowcase;
