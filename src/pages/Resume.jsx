import React from 'react';  
import { FaSquareFull } from "react-icons/fa";

const Resume = () => {
  // Data arrays for easy maintenance
  const experiences = [
    {
      period: "2022 - 2024",
      position: "Programmer",
      company: "Cognizant Technology Solutions",
      location: "Remote + onsite in Mumbai, Maharashtra",
      description: [
        "I have extensive experience in automation and manual testing, specializing in healthcare systems using UFT, Visual Basic, and Trizetto QNXT for member claims and provider services. ",
        "I've successfully reduced QA cycle times through automation and improved documentation processes while working on projects like Emblem Health, utilizing tools such as Jira and Excel for comprehensive test management."
      ]
    }
  ];

  const education = [
    {
      period: "2024 - 2026",
      degree: "Masters in Computer Applications (MCA)",
      institution: "Amity University",
      location: "Mumbai, Maharashtra",
      description: [
        "Specialized in web development and software engineering with focus on modern JavaScript frameworks.",
        "Completed projects in full-stack development, database management, and responsive web design."
      ]
    },
    {
      period: "2018 - 2021",
      degree: "Bachelor of Science (Information Technology)",
      institution: "Elphinstone College",
      location: "Mumbai, Maharashtra",
      description: [
        "Completed with focus on Mathematics and Computer Science, achieving 8.3 CGPA.",
        "Participated in coding competitions and developed early interest in web development."
      ]
    }
  ];

  const technicalSkills = [
    "HTML5", "CSS3", "JavaScript", "React.js",
    "Tailwind CSS", "Node.js", "Express.js", "MongoDB",
    "Java", "C++", "Git", "SQL"
  ];

  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Hindi", level: "Native" },
    { name: "Spanish", level: "Basic" }
  ];

  const handleDownloadCV = () => {
    // Add your CV download logic here
    console.log("Downloading CV...");
  };

  return (
    <section className="bg-[#e6dace] py-16 px-4 pt-[200px]">
      <div className="container mx-auto max-w-2xl">
        
        {/* Experience Section */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-black">Experience</h2>
          <button 
            onClick={handleDownloadCV}
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 border border-blue-500 transition-colors duration-300"
          >
            DOWNLOAD CV
          </button>
        </div>

        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-8 h-[300px] flex items-center mb-12">
            <div className="grid md:grid-cols-3 gap-8 w-full">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">{exp.period}</h3>
                <h4 className="text-lg font-semibold text-black mb-2">{exp.position}</h4>
                <p className="text-gray-600 mb-1">{exp.company}</p>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <div className="md:col-span-2">
                {exp.description.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4 last:mb-0">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Education Section */}
        <div className="flex justify-between items-center mb-12 mt-12">
          <h2 className="text-4xl font-bold text-black">Education</h2>
        </div>

        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-8 h-[300px] flex items-center mb-12">
            <div className="grid md:grid-cols-3 gap-8 w-full">
              <div className="md:col-span-1">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">{edu.period}</h3>
                <h4 className="text-lg font-semibold text-black mb-2">{edu.degree}</h4>
                <p className="text-gray-600 mb-1">{edu.institution}</p>
                <p className="text-gray-600">{edu.location}</p>
              </div>
              <div className="md:col-span-2">
                {edu.description.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-700 mb-4 last:mb-0">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Skills and Languages Section */}
        <div className="rounded-lg shadow-sm p-8 bg-white mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Professional Skillsets</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {technicalSkills.map((skill, index) => (
              <p key={index} className="text-gray-700 flex items-center">
                <FaSquareFull size={11} className="text-blue-500 mr-2 flex-shrink-0" />
                {skill}
              </p>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-black mb-6">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((lang, index) => (
              <p key={index} className="text-gray-700 flex items-center">
                <FaSquareFull size={11} className="text-blue-500 mr-2 flex-shrink-0" />
                {lang.name} ({lang.level})
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
