import React from 'react';

const MyJourney = () => {
  return (
    <section className="education py-8 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-center" id="education">
      <div className="education-content flex flex-col items-center justify-center text-left">
        <h1 className="text-4xl font-bold mb-8 text-blue-800">
          My <span className="text-white">Journey</span>
        </h1>
        <div className="eduline relative border-l-4 border-white">
          {/* Education Box 1 */}
          <div className="education-box relative bg-blue-800 border-2 border-yellow-400 p-6 my-6 rounded-lg shadow-lg">
            <div className="year text-sm text-yellow-400 mb-2 flex items-center">
              <i className="bx bxs-calendar mr-2"></i>2022-2026
            </div>
            <div className="university">
              <h3 className="text-lg font-semibold text-white">Vivekanand Education Society Information of Technology, Chembur</h3>
            </div>
            <div className="uni-para text-sm text-white mt-2">
              I am currently enrolled at Vivekanand College, where I am in my second year pursuing a Bachelor of Engineering (B.E) degree.
            </div>
          </div>

          {/* Education Box 2 */}
          <div className="education-box relative bg-blue-800 border-2 border-yellow-400 p-6 my-6 rounded-lg shadow-lg">
            <div className="year text-sm text-yellow-400 mb-2 flex items-center">
              <i className="bx bxs-calendar mr-2"></i>2020-2022
            </div>
            <div className="university">
              <h3 className="text-lg font-semibold text-white">Lakshya Prep High School and Jr. College, Thane</h3>
            </div>
            <div className="uni-para text-sm text-white mt-2">
              I attended Lakshya Prep College for my 11th and 12th grades, and achieved an impressive 85.5% on my 12th-grade Maharashtra State board examinations.
            </div>
          </div>

          {/* Education Box 3 */}
          <div className="education-box relative bg-blue-800 border-2 border-yellow-400 p-6 my-6 rounded-lg shadow-lg">
            <div className="year text-sm text-yellow-400 mb-2 flex items-center">
              <i className="bx bxs-calendar mr-2"></i>2008-2020
            </div>
            <div className="university">
              <h3 className="text-lg font-semibold text-white">Sri Ma Vidyalaya, Thane</h3>
            </div>
            <div className="uni-para text-sm text-white mt-2">
              I attended Sri Ma Vidyalaya School until my 10th grade and achieved an impressive 94% on my CBSE board exams.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
