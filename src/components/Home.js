// src/components/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup'); // Replace with your actual signup route
  };

  return (
    <div className="home">
      <main>
        <section className="welcome-section">
          <h1>Welcome to Job Searching Portal</h1>
          <p>Your gateway to finding the perfect job or talent.</p>
        </section>

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-list">
            <div className="testimonial">
              <p>"This portal helped me find my dream job!"</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <p>"Easy to use and very effective."</p>
              <p>- Jane Smith</p>
            </div>
            <div className="testimonial">
              <p>"I found great candidates for my company here."</p>
              <p>- Mike Johnson</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Get Started Today!</h2>
          <p>Sign up now and start your journey to a better career or find the perfect candidate for your company.</p>
          <button onClick={handleSignupClick}>Sign Up</button>
        </section>
      </main>
    </div>
  );
};

export default Home;
