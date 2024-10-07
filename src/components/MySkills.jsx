import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const MySkills = () => {
  return (
    <section className="skills bg-yellow-600 text-white p-8" id="skills">
      <div className="skills-content text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">
          My <span className="text-blue-900">Skills</span>
        </h1>
        <div className="skill-box flex flex-wrap justify-center w-80">
          
          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">
              HTML 
              {/* <FontAwesomeIcon icon={faHtml5} className="text-orange-600" /> */}
            </h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-11/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">
              CSS 
              {/* <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500" /> */}
            </h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-10/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">
              JavaScript 
              {/* <FontAwesomeIcon icon={faJs} className="text-yellow-500" /> */}
            </h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-9/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">JQuery</h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-8/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">MongoDB</h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-10/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">ExpressJS</h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-8/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">
              ReactJS 
              {/* <FontAwesomeIcon icon={faReact} className="text-blue-300" /> */}
            </h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-10/12"></div>
            </div>
          </div>

          <div className="progress-block mb-4 w-64">
            <h3 className="text-xl font-semibold">
              NodeJS 
              {/* <FontAwesomeIcon icon={faNodeJs} className="text-green-600" /> */}
            </h3>
            <div className="progress border border-aqua mt-2">
              <div className="bar bg-blue-500 h-2 w-9/12"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MySkills;
