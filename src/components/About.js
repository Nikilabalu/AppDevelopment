// About.js
import React from 'react';
import './About.css'; // Make sure to create and include the CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
             At JobXplore, our mission is to bridge the gap between talented individuals and the companies that need them. We strive to create opportunities for job seekers by providing a user-friendly platform that connects them with their ideal job.
        </p>
      </section>
      <section className="about-values">
        <div className="col">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Integrity:</strong> We believe in transparency and honesty in all our interactions.</li>
          <li><strong>Innovation:</strong> We continuously improve our platform to meet the evolving needs of our users.</li>
          <li><strong>Customer-Centric:</strong> We prioritize the needs of our users and are committed to providing exceptional service.</li>
        </ul>
        </div>
      </section>
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
          <img src="data:image/jpeg;base64,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"  alt="Team Member 2" />
            <h3>Jane wilson</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/free-photo/handsome-corporate-man-real-estate-agent-assistant-smiling-hold-hands-together-how-may-i-help-you-smiling-friendly-polite-assist-customer-white-background_176420-45257.jpg"  alt="Team Member 2" />
            <h3>John </h3>
            <p>Chief Technology Officer</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>
      <section className="about-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need further information, feel free to reach out to us:</p>
        <p>Email: <a href="mailto:support@yourportal.com">support@yourportal.com</a></p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default About;
