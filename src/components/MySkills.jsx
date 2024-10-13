import React from "react";

const MySkills = () => {
  return (
    <section
      className="skills bg-indigo-900 text-white p-8 flex justify-center items-center "
      id="skills"
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 10%, transparent 10%)`,
        backgroundSize: '20px 20px',
      }}
    >
      <img src="https://img.freepik.com/premium-photo/composite-collage-intelligent-smart-girl-black-white-colors-sitting-use-wireless-netbook_1197797-230115.jpg?ga=GA1.1.1655513578.1726562178&semt=ais_hybrid" className="w-80"/>

      <div className="skills-content text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">
          My <span className="text-yellow-400">Skills</span>
        </h1>
        <div className="skill-box flex flex-wrap justify-center w-80">
          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
              HTML
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-11/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
               CSS 
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-10/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
           JavaScript
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-11/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
              JQuery 
              
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-9/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
               MongoDB 
              
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-11/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
               ExpressJS 
              
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-10/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
              ReactJS
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-11/12"></div>
            </div>
          </div>

          <div className="progress-flex flex items-center justify-between mb-4 w-64">
            <h3 className="text-xl font-semibold flex items-center w-40">
               NodeJS 
              
            </h3>
            <div className="progress border border-aqua w-full ml-4">
              <div className="bar bg-blue-500 h-2 w-11/12"></div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default MySkills;
