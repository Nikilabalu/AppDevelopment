import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [applicantName, setApplicantName] = useState('');
  const [resume, setResume] = useState('');
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    // Fetch job listings from your backend
    axios.get('/api/jobs')
      .then(response => setJobs(response.data))
      .catch(error => console.error('Error fetching jobs:', error));
  }, []);

  const handleApply = (jobId) => {
    setSelectedJobId(jobId);
  };

  const handleSubmitApplication = () => {
    const application = {
      applicantName,
      resume,
      jobId: selectedJobId
    };

    axios.post('/api/applications', application)
      .then(response => {
        alert('Congratulations, you have applied for the job!');
        setApplicantName('');
        setResume('');
        setSelectedJobId(null);
      })
      .catch(error => console.error('Error applying for job:', error));
  };

  return (
    <div className="job-list">
      <h1>Job Listings</h1>
      {jobs.map(job => (
        <div key={job.id} className="job-listing">
          <h2>{job.companyName}</h2>
          <p>Role: {job.jobRole}</p>
          <p>Description: {job.jobDescription}</p>
          <p>Skills Required: {job.skillsRequired}</p>
          <p>Number of Vacancies: {job.vacancies}</p>
          <button onClick={() => handleApply(job.id)}>Apply</button>
        </div>
      ))}

      {selectedJobId && (
        <div className="application-form">
          <h2>Apply for Job</h2>
          <input
            type="text"
            placeholder="Your Name"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Resume"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
          <button onClick={handleSubmitApplication}>Submit Application</button>
        </div>
      )}
    </div>
  );
};

export default JobList;
