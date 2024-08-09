// src/components/AdminDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
      </header>
      <main>
        <section className="dashboard-section">
          <h2>User Management</h2>
          <p>View and manage all registered users.</p>
          <button onClick={() => navigate('/manage-users')}>Manage Users</button>
        </section>

        <section className="dashboard-section">
          <h2>Job Management</h2>
          <p>View and manage all job listings.</p>
          <button onClick={() => navigate('/manage-jobs')}>Manage Jobs</button>
        </section>

        <section className="dashboard-section">
          <h2>Reports</h2>
          <p>View reports and analytics.</p>
          <button onClick={() => navigate('/view-reports')}>View Reports</button>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
