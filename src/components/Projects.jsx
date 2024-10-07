import React from 'react';
import ProjectCard from './ProjectCard';
import FoodvistaImg from "../assets/foodvista_image.png"
import InvestHubImg from "../assets/investhub_image.png"
import YTDurationImg from "../assets/ytdurationtracker_image.png"

const projectsData = [
  {
    title: 'Food Vista',
    description: 'FoodVista streamlines food browsing and ordering with a fast-loading app. Explore, order, and enjoy dishes effortlessly, all in a user-friendly interface.',
    image: FoodvistaImg, 
    link: 'https://food-vista.vercel.app/'
  },
  {
    title: 'InvestHub',
    description: 'An interactive map-based tool to select different transport modes.',
    image: InvestHubImg,
    link: 'https://github.com/Anuprita579/Investhub'
  },
  {
    title: 'YT Duration Tracker',
    description: 'YT Duration Tracker makes YouTube playlists easy! Paste your link, click search, and get instant details like video count, total duration, and even playback times at different speeds.',
    image: YTDurationImg,
    link: 'https://github.com/Anuprita579/YT_Duration_Tracker'
  },
  // Add more projects here...
];

const Projects = () => {
  return (
    <section className="p-8 bg-blue-800 dark:bg-gray-800 text-white">
      <h3 className="text-3xl font-bold mb-8 text-center">My Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            image={project.image}  
            link={project.link} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
