import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';
import ExperiencePage from 'pages/ExperiencePage';
import ContactPage from 'pages/ContactPage';

export default function App() {
  const homePageRef = React.useRef( null );
  const aboutPageRef = React.useRef( null );
  const experiencePageRef = React.useRef( null );
  const contactPageRef = React.useRef( null );

  const refs = {
    home: homePageRef,
    about: aboutPageRef,
    experience: experiencePageRef,
    contact: contactPageRef,
  };

  return (
    <div>
      <HomePage ref={ homePageRef } />
      <Navbar refs={ refs } />
      <AboutPage ref={ aboutPageRef } />
      <ExperiencePage ref={ experiencePageRef } />
      <ContactPage ref={ contactPageRef } />
    </div>
  );
}
