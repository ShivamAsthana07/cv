import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      role: "Full Stack Developer",
      description: "Developed a complete MERN stack e-commerce platform with user authentication, payment integration, and admin dashboard. Implemented responsive design and optimized performance.",
      cardType: "ecommerce"
    },
    {
      id: 2,
      name: "Task Management App",
      role: "Frontend Developer", 
      description: "Built a React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features using Socket.io.",
      cardType: "taskapp"
    }
  ];

  const renderProjectCard = (cardType) => {
    // Different card designs based on project type
    const cardConfigs = {
      ecommerce: {
        gradient: "from-blue-400 via-purple-500 to-pink-500",
        title: "E-Commerce",
        subtitle: "Platform",
        icon: "🛒"
      },
      taskapp: {
        gradient: "from-green-400 via-blue-500 to-purple-600",
        title: "Task",
        subtitle: "Manager",
        icon: "✓"
      }
    };

    const config = cardConfigs[cardType] || cardConfigs.ecommerce;

    return (
      <div className={`w-80 h-56 bg-gradient-to-br ${config.gradient} rounded-lg p-6 flex flex-col justify-between relative overflow-hidden`}>
        <div className="absolute top-4 right-4 w-[150px] h-[190px] bg-white bg-opacity-20 rounded"></div>
        
        <div className="relative z-10">
          <div className="text-white text-2xl mb-4">{config.icon}</div>
        </div>
        
        <div className="relative z-10 text-white">
          <h4 className="text-lg font-bold mb-1">{config.title}</h4>
          <h4 className="text-lg font-bold mb-2">{config.subtitle}</h4>
          <p className="text-sm opacity-90">MERN Stack</p>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#e6dace] py-16 px-4 pt-[200px]">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
              }`}
            >
              {/* Text Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="border-l-4 border-blue-500 pl-6">
                  <h2 className="text-2xl font-bold text-blue-500 mb-2">
                    {project.name}
                  </h2>
                  <h3 className="text-lg font-medium text-gray-800 mb-4">
                    {project.role}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base">
                  {project.description}
                </p>
              </div>

              {/* Project Visual */}
              <div className={`flex justify-center ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  {renderProjectCard(project.cardType)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
