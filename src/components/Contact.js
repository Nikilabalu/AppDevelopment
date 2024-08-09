import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add logic to send the message to your email or backend server here
  };

  return 
  (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p>If you have any questions or feedback, feel free to reach out to us using the contact form below or through our email and phone.</p>
        <p><strong>Email:</strong> support@jobsearchingportal.com</p>
        <p><strong>Phone:</strong> +1 234 567 890</p>
      </div>
      {submitted ? (
        <p>Thank you for contacting us. We will get back to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <label>Message:</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
