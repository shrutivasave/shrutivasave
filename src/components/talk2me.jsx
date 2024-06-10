import React from 'react';
import './talk2me.css';
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const TalkToMe = () => {
  return (
    <div className="contact-us">
      <h2>give me a job! (or just say hi)</h2>
      <div className="icons">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={40} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={40} />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope size={40} />
        </a>
      </div>
      <form className="contact-form">
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
      </form>
    </div>
  );
};

export default TalkToMe;
