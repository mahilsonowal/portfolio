import React from 'react';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

const projects = [
    {
        name: 'Mukuba Economic Research and Consulting Firm',
        image: '/projects/project1.png',
        description: 'A Zambia-based project dedicated to providing high-quality economic research, data analysis, and strategic consulting services.',
    },
    {
        name: 'Meditation Website Design',
        image: '/projects/project2.jpg',
        description: 'A prototype design for a meditation website.',
    },


    {
        name: 'Clothing Website Design',
        image: '/projects/project3.jpg',
        description: 'A prototype design for a clothing website.',
    },

    // ... add more projects as needed

];

const ProjectShowcase = () => {
    return (
        <div className="project-showcase bg-black text-white py-8 md:py-16">
            <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
                <FaCode className="text-2xl md:text-3xl text-[#808080]" />
                <h2 className="text-3xl md:text-4xl font-bold w-auto">My Projects</h2>
                <FaLaptopCode className="text-2xl md:text-3xl text-[#808080]" />
            </div>
            <div className="flex flex-col space-y-8 md:space-y-16 w-11/12 md:w-2/3 mx-auto px-4 md:px-0">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-item flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 md:p-6 rounded-xl 
                                 hover:bg-gray-900 transition-all duration-300 border border-gray-800"
                    >
                        <div className="flex-1 space-y-3 md:space-y-4">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">{project.name}</h3>
                            <p className="text-gray-400 leading-relaxed text-base md:text-lg">{project.description}</p>
                        </div>
                        <div className="flex-1 w-full md:w-auto mt-4 md:mt-0">
                            <img 
                                src={project.image} 
                                alt={project.name} 
                                className="w-full h-48 md:h-64 object-contain rounded-lg shadow-2xl 
                                         hover:transform hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectShowcase;
