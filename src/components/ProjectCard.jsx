import React from 'react';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="p-4 border border-gray-400 dark:border-gray-600 rounded-lg bg-blue-800 dark:bg-gray-700 hover:shadow-lg hover:bg-yellow-400 dark:hover:bg-gray-600 transition duration-300 h-full">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <div className="p-4">
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-md">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
