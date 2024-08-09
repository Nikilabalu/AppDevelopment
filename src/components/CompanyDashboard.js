import React from 'react';
import './CopanyDashboard.css';

const CompanyDashboard = () => {
  // Example posts data
  const posts = [
    { id: 1, title: "Software Developer Position", date: "2024-07-01", applicants: 10 },
    { id: 2, title: "Data Analyst Opening", date: "2024-07-02", applicants: 5 },
    { id: 3, title: "UI/UX Designer Needed", date: "2024-07-03", applicants: 8 },
    { id: 4, title: "Project Manager Vacancy", date: "2024-07-04", applicants: 4 },
    { id: 5, title: "Marketing Specialist Role", date: "2024-07-05", applicants: 7 }
  ];

  return (
    <div className="dashboard">
      <h2>Company Dashboard</h2>
      <p>Welcome to the company dashboard. Here are your previous job posts:</p>
      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>Date: {post.date}</p>
            <p>Applicants: {post.applicants}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDashboard;
