import React from 'react';

const ContactPage = ( { ref } ) => {
  const placeholderText = 'Hi Hector,\n\nI hope this message finds you well. I wanted to reach out to discuss...\n\nBest regards,\n[Your Name]';
  const textareaStyle = {
    height: '10.0rem',
    display: 'block',
    width: '100%',
    padding: '0.375rem 0.75rem',
    marginBottom: '1.0rem',
    fontSize: '1.0rem',
    fontWeight: 400,
    lineHeight: '1.5',
    color: '#000819',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  };

  return (
    <div ref={ ref } className="page">
      <div className="container">
        <span className="title">
          Contact
        </span>
        <div>
          <div className="mb-4">
            <p>
              Feel free to reach out, whether you have a question or just want to say hello!
            </p>
            <p>
              Please don't forget to leave your contact information so I can reach back.
            </p>
          </div>
          <form action="https://formspree.io/f/mbjqgbbl" method="POST">
            <textarea style={ textareaStyle } placeholder={ placeholderText } />
            <div style={ { display: 'flex', justifyContent: 'end' } }>
              <button type="reset" className="btn btn-outline-light mr-4 min-w-20">Clear</button>
              <button type="submit" className="btn btn-primary min-w-20">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
