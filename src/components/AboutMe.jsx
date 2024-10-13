import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-section" className="p-8 bg-violet-950 dark:bg-gray-800 text-white flex flex-col items-center" style={{
      backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 10%, transparent 10%)`,
      backgroundSize: '20px 20px',
    }}>
      <h1 className="text-3xl font-bold mb-4 text-center">About <span className='text-yellow-400'> Me</span></h1>
      <p className='w-1/2 text-center'>
        I'm a software developer with a strong passion for building dynamic web applications.
        I believe in teamwork, dedication, and excellence.
      </p>
    </section>
  );
};

export default AboutMe;
