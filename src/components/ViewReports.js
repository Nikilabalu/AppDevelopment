import React from 'react';
import './ViewReports.css';

const ViewReports = () => {
  // Sample data
  const data = [
    { month: 'January', value: 65 },
    { month: 'February', value: 59 },
    { month: 'March', value: 80 },
    { month: 'April', value: 81 },
    { month: 'May', value: 56 },
    { month: 'June', value: 55 },
    { month: 'July', value: 40 },
    { month: 'August', value: 70 },
    { month: 'September', value: 65 },
    { month: 'October', value: 85 },
    { month: 'November', value: 90 },
    { month: 'December', value: 100 },
  ];

  const totalUsers = 1200;
  const companyUsers = 300;
  const jobSeekerUsers = 900;

  return (
    <div className="reports-container">
      <h2>Reports</h2>
      <div className="summary">
        <div className="summary-item">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="summary-item">
          <h3>Company Users</h3>
          <p>{companyUsers}</p>
        </div>
        <div className="summary-item">
          <h3>Job Seeker Users</h3>
          <p>{jobSeekerUsers}</p>
        </div>
      </div>
      <div className="chart">
        {data.map((item, index) => (
          <div key={index} className="bar" style={{ height: `${item.value * 2}px` }}>
            <span className="label">{item.month}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewReports;
