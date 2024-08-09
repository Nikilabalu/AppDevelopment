import React from 'react';
import './ManageUsers.css';

const ManageUsers = () => {
  // Sample data
  const companyUsers = [
    { id: 1, name: 'Company A', email: 'contact@companya.com', employees: 100 },
    { id: 2, name: 'Company B', email: 'contact@companyb.com', employees: 50 },
    { id: 3, name: 'Company C', email: 'contact@companyc.com', employees: 200 },
  ];

  const jobSeekerUsers = [
    { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', appliedJobs: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com', appliedJobs: 3 },
    { id: 3, name: 'Sam Wilson', email: 'sam.wilson@gmail.com', appliedJobs: 7 },
  ];

  return (
    <div className="manage-users-container">
      <h2>Manage Users</h2>
      <div className="user-section">
        <h3>Company Users</h3>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Employees</th>
            </tr>
          </thead>
          <tbody>
            {companyUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.employees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="user-section">
        <h3>Job Seeker Users</h3>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Applied Jobs</th>
            </tr>
          </thead>
          <tbody>
            {jobSeekerUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.appliedJobs}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
