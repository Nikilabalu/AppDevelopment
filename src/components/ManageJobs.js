// src/components/ManageJobs.js
import React from 'react';
import './ManageJobs.css';

const ManageJobs = () => {
  // Sample data
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'ABC Corp' },
    { id: 2, title: 'Product Manager', company: 'XYZ Inc' },
    // Add more jobs as needed
  ];

  return (
    <div className="manage-jobs">
      <h1>Manage Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageJobs;
