import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JobList from "./components/JobList"; 
import CompanyDashboard from "./components/CompanyDashboard"; 
import AdminDashboard from "./components/AdminDashboard";
import ManageUsers from "./components/ManageUsers"; // Import ManageUsers
import ManageJobs from "./components/ManageJobs";   // Import ManageJobs
import ViewReports from "./components/ViewReports"; // Import ViewReports

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/joblist" element={<JobList />} />
        <Route path="/companydashboard" element={<CompanyDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manage-users" element={<ManageUsers />} /> {/* Add ManageUsers Route */}
        <Route path="/manage-jobs" element={<ManageJobs />} />   {/* Add ManageJobs Route */}
        <Route path="/view-reports" element={<ViewReports />} /> {/* Add ViewReports Route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
