import React from 'react';
import Tabs from 'components/Tabs';

const ExperiencePage = ( { ref } ) => {
  return (
    <div ref={ ref } className="page">
      <div className="container">
        <span className="title">
          Experience
        </span>
        <div style={ { display: 'flex', flexDirection: 'column', padding: '1.0rem 1.0rem', color: 'white' } }>
          <Tabs defaultTab="automattic">
            <Tabs.List>
              <Tabs.Tab anchor="automattic">
                Automattic
              </Tabs.Tab>
              <Tabs.Tab anchor="safetyamp">
                SafetyAmp
              </Tabs.Tab>
              <Tabs.Tab anchor="chiedo-labs">
                Chiedo Labs
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Content anchor="automattic">
              <span style={ { display: 'flex', flexDirection: 'column' } }>
                <b>Senior Software Engineer</b>
                <ul className="list-disc ml-5">
                  <li>Led development of key features in WooPayments, WooPay, and Stripe, supporting high-traffic eCommerce platforms.</li>
                  <li>Acted as Incident Lead for multiple security events and outages, ensuring minimal disruption and quick resolution.</li>
                  <li>Contributed to both frontend and backend systems using JavaScript + React and PHP + WordPress.</li>
                </ul>
              </span>
            </Tabs.Content>
            <Tabs.Content anchor="safetyamp">
              <b>Software Engineer</b>
              <ul className="list-disc ml-5">
                <li>Served as Technical Lead for visitor-contractor management system, enabling the processing of over 1,000 unique visitors.</li>
                <li>Boosted integration test performance by 50%, significantly reducing CI/CD times and enhancing team productivity.</li>
                <li>Developed and maintained full-stack solutions using PHP (Laravel) + Vue, and NativeScript + Swift for iOS frontend.</li>
              </ul>
            </Tabs.Content>
            <Tabs.Content anchor="chiedo-labs">
              <b>Software Engineer</b>
              <ul className="list-disc ml-5">
                <li>Collaborated on education-focused web apps for managing academic records and facilitating student-employer connections.</li>
                <li>Mentored software developers on containerization strategies using Docker.</li>
                <li>Built scalable web apps with NodeJS + Express backend and React + Redux frontend.</li>
              </ul>
            </Tabs.Content>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
