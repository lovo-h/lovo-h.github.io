import React from 'react';
import banner from 'assets/hector_lovo.jpg';

const AboutPage = ( { ref } ) => {
  return (
    <div ref={ ref } className="page">
      <div className="container">
        <span className="title">
          About Me
        </span>
        <div style={ { display: 'flex', flexDirection: 'column', padding: '1.0rem 1.0rem' } }>
          <span className="paragraph">
            Hello, my name is Hector and I am a senior software engineer with a focus on full-stack web development.
          </span>
          <span className="about-profile" style={ {
            display: 'inline-block',
            alignSelf: 'center',
            background: 'url("' + banner + '") 0 0',
            backgroundSize: '100%',
            borderRadius: '50%',
            height: '6.0rem !important',
            width: '5.5rem !important',
            margin: '1.0rem 0',
          } }>

          </span>
          <span className="paragraph">
            I have a passion for creating dynamic and responsive web applications that provide an excellent user
            experience. With a strong foundation in both front-end and back-end technologies, I am able to build
            complete solutions that meet the needs of my clients and users. I am always eager to learn new skills
            and stay up-to-date with the latest trends in web development.
          </span>
          <span className="paragraph">
            Senior Software Engineer with 9+ years of experience delivering full-stack solutions in PHP, JavaScript, React, Vue, Laravel, and WordPress. Proven ability to lead remote engineering teams, optimize performance, and drive product development across complex technical ecosystems. Adept at managing security incidents, improving infrastructure, mentoring junior developers, solving complex technical issues, and delivering scalable, user-centered solutions.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
