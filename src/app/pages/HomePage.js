import React from 'react';
import resume from 'assets/HectorLovo_SeniorFullStackSoftwareEngineer_Resume.pdf';

const HomePage = ( { ref } ) => {
  return (
    <div className="home-page" ref={ ref }>
      <h2>Hi, my name is <span style={ { color: 'rgb(51, 121, 255)' } }>Hector Lovo</span>.</h2>
      <h2>I am a full-stack web developer.</h2>
      <p className="mt-8">
        <a href={ resume } type="submit" className="btn btn-primary btn-resume">Download Resume</a>
      </p>
    </div>
  );
};

export default HomePage;
