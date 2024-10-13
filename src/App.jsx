import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import MyJourney from './components/MyJourney';
import MySkills from './components/MySkills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Projects from './components/Projects';  // Import Projects Page

function App() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const journeyRef = useRef(null);
  const skillRef = useRef(null);
  const contactRef = useRef(null);


  // const scrollToSectionWithDelay = (section) => {
  //   navigate("/");  // Navigate to the home page first
  //   setTimeout(() => {
  //     scrollToSection(section);  // Scroll after a slight delay
  //   }, 500);  // Adjust the delay time as necessary
  // };

  const scrollToSection = (section) => {
    if (section === 'about') {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'hero') {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'journey') {
      journeyRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'skill') {
      skillRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact') {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <Router>
      <div>
        <div className="bg-yellow-400 text-black min-h-screen">
          <Header scrollToSection={scrollToSection}/>

          <Routes>
            <Route path="/" element={
               <>
               <div  ref={heroRef}><HeroSection /></div>
               <div ref={aboutRef}><AboutMe /></div>
               <div ref={journeyRef}><MyJourney /></div>
               <div ref={skillRef}><MySkills /></div>
               <div ref={contactRef}><ContactMe /></div>
             </>
            } />
            <Route path="/projects" element={<Projects />} />  
          </Routes>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
