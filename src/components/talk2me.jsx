import React, { useState } from 'react';
import './talk2me.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TalkToMe = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formspree.io/f/mjvnnywd', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setFormStatus('Email sent successfully!');
        form.reset();
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            setFormStatus(data["errors"].map(error => error["message"]).join(", "));
          } else {
            setFormStatus('Oops! There was a problem submitting your form');
          }
        })
      }
    })
    .catch(error => {
      setFormStatus('Oops! There was a problem submitting your form');
    });
  };

  return (
    <div className="contact-us">
      <h2>give me a job! (or just say hi)</h2>
      <div className="icons">
        <a href="https://github.com/shrutivasave" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
{/*         <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a> */}
        <a href="https://www.linkedin.com/in/shruti-vasave-860206165/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:shrutivasave@gmail.com">
          <FaEnvelope size={40} />
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Submit</button>
        {formStatus && <p>{formStatus}</p>}
      </form>
    </div>
  );
};

export default TalkToMe;
