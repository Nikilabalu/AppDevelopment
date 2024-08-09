import React, { useState } from 'react';

const ApplyForm = ({ job, onClose }) => {
  const [name, setName] = useState('');
  const [resume, setResume] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., sending data to an API
    setSuccessMessage(`Your interest in the ${job.role} position at ${job.company} has been successfully submitted.`);
  };

  return (
    <div className="apply-form">
      <button onClick={onClose}>Close</button>
      {successMessage ? (
        <p>{successMessage}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Resume:
              <input
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ApplyForm;
