import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  useEffect(() => {
    const textElement = document.getElementById('element');
    const words = ['Developer', 'Software Engineer', 'Problem Solver'];
    let i = 0;
    let j = 0;
    let currentWord = '';
    let isDeleting = false;
    let speed = 150;

    function type() {
      if (i < words.length) {
        if (!isDeleting && j <= words[i].length) {
          currentWord = words[i].substring(0, j++);
          textElement.innerHTML = currentWord;
        }

        if (isDeleting && j > 0) {
          currentWord = words[i].substring(0, j--);
          textElement.innerHTML = currentWord;
        }

        if (j === words[i].length && !isDeleting) {
          isDeleting = true;
          speed = 500; // pause before deleting
        } else if (isDeleting && j === 0) {
          isDeleting = false;
          i++;
          speed = 200; // time between word cycles
        }

        if (i === words.length) {
          i = 0; // loop back to the first word
        }
      }
      setTimeout(type, speed);
    }

    type();
  }, []);

  return (
    <section className="bg-gradient-to-r from-yellow-500 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
          Hi! I am Anuprita !!
        </h1>
        
        {/* Animated text section */}
        <div className="text-animate animate">
          <h3 className="text-3xl md:text-5xl font-semibold text-white">
            <span id="element"></span>
          </h3>
        </div>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Coding: Where Logic Becomes Magic.
        </p>

        {/* Inline buttons for Hire Me and Resume */}
        <div className="inline-box flex justify-center space-x-4">
          <Link to="/">
            <button className="btn-box bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" >
              Hire Me
            </button>
          </Link>
          <a href="Anuprita_Resume.pdf" download="Anuprita_Resume">
            <button className="btn-box bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
              Resume
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
